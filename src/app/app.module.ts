import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardTeaserComponent } from './card-teaser/card-teaser.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { DetailsComponent } from './details/details.component';
import { SearchTypeAheadComponent } from './search-type-ahead/search-type-ahead.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainFooterComponent,
    CardListComponent,
    CardItemComponent,
    CardTeaserComponent,
    CardDetailsComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    DetailsComponent,
    SearchTypeAheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
