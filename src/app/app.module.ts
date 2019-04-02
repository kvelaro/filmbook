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


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmsListComponent,
    FilmComponent,
    FilmDetailsComponent,
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
