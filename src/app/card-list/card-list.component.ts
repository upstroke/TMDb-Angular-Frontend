import {Component, Input, OnInit} from '@angular/core';
import {MovieStoreService} from "../movie-store.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  moviesOrShows : any
  @Input() type: any
  @Input() amount: any;

  constructor(private mss: MovieStoreService) { }

  ngOnInit(): void {
    this.mss.fetchMoviesOrShows(this.type)
      .subscribe(res => this.moviesOrShows = res.results,error => this.moviesOrShows = null)
  }

}
