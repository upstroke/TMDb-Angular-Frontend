import { Component, OnInit } from '@angular/core';
import {MovieStoreService} from "../movie-store.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  media :String
  id :String
  movie :any
  cast :any
  params: any

  constructor(
    private mss: MovieStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.media = params['media']
      this.id = params['id']

      this.mss.fetchSingleMovieOrShow(this.media,this.id)
        .subscribe(res => this.movie = res,error => this.movie = null)

      // get movie cast
      this.mss.fetchCredits(this.media,this.id)
        .subscribe(res => this.cast = res.cast,error => this.cast = null)

    })
  }

  ngOnInit(): void {}

}
