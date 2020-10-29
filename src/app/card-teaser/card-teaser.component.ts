import { Component, OnInit } from '@angular/core';
import {MovieStoreService} from '../movie-store.service';

@Component({
  selector: 'app-card-teaser',
  templateUrl: './card-teaser.component.html',
  styleUrls: ['./card-teaser.component.scss']
})
export class CardTeaserComponent implements OnInit {

  constructor(
    private mss: MovieStoreService
  ) { }

  movie : any;;
  cast: any;

  ngOnInit(): void {
    // get movie
    this.mss.fetchSingleMovieOrShow('movie', '497582')
      .subscribe(res => this.movie = res, error => this.movie = null);

    // get movie cast
    this.mss.fetchCredits('movie', '497582')
      .subscribe(res => this.cast = res.cast, error => this.cast = null);
  }

}
