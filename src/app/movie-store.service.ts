import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieStoreService {

  constructor(private http: HttpClient) { }
  apiKey = environment.APIKey
  endpoint = environment.APIEndpoint
  lang = environment.Lang

  fetchMoviesOrShows(type: String) :Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${type}?api_key=${this.apiKey}&language=${this.lang}`)
  }

  fetchSingleMovieOrShow(type: String, id: String) :Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${type}/${id}?api_key=${this.apiKey}&language=${this.lang}`)
  }

  fetchCredits(type: String, id: String) :Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${type}/${id}/credits?api_key=${this.apiKey}&language=${this.lang}`)
  }

  fetchSearch(type: String, term: String) {
    return this.http.get<any>(`${this.endpoint}/search/${type}?api_key=${this.apiKey}&language=${this.lang}&query=${term}`)

  }

}
