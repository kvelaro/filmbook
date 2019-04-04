import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { BannerComponent } from './films/banner/banner.component';
import { NgbModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { FilmDetailsComponent } from './films/film-details/film-details.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { GenresComponent } from './genres/genres.component';
import { GenresListComponent } from './genres/genres-list/genres-list.component';
import { GenreFilmsComponent } from './genres/genre-films/genre-films.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmsListComponent,
    FilmComponent,
    FilmDetailsComponent,
    GenresComponent,
    GenresListComponent,
    GenreFilmsComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [NgbDropdown],
  bootstrap: [AppComponent]
})
export class AppModule { }
