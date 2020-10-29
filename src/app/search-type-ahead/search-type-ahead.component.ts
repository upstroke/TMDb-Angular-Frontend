import { Component, OnInit } from '@angular/core';
import {MovieStoreService} from "../movie-store.service";


@Component({
  selector: 'app-search-type-ahead',
  templateUrl: './search-type-ahead.component.html',
  styleUrls: ['./search-type-ahead.component.scss']
})
export class SearchTypeAheadComponent implements OnInit {

  resultsMovie :any
  totalResultsMovie: Number = 0
  resultsTvShow :any
  totalResultsTvShow: Number = 0
  resultsVisible :boolean = false


  constructor(private mss: MovieStoreService) { }

  ngOnInit(): void {}

  myKeyUpHandler($element: any): void {
    if($element.target.value.length > 3) {
      // get all Movies
      this.mss.fetchSearch('movie', $element.target.value)
        .subscribe(res => {
          this.totalResultsMovie = res.total_results
          this.resultsMovie = res.results
          // console.table('result: ',this.resultsMovie)
        })

      // get all Tv-Shows
      this.mss.fetchSearch('tv', $element.target.value)
        .subscribe(res => {
          this.totalResultsTvShow = res.total_results
          this.resultsTvShow = res.results
          // console.table('result: ',this.resultsTvShow)
        })

      if(this.totalResultsMovie || this.totalResultsTvShow) {
        this.resultsVisible = true
      }else {
        this.resultsVisible = false
      }
    }
  }

  toggleResult(action) :void {
    if(action === 'hide'){this.resultsVisible = false}
    if(action === 'show'){
      if(this.totalResultsMovie || this.totalResultsMovie){
        this.resultsVisible = true
      }
    }
  }

  groupBy(array, key) :void {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
      return result;
    }, {})
  }

}
