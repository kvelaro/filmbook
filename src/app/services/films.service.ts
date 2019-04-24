import { Injectable, OnInit } from '@angular/core';
import { FilmModel } from './../models/film.model';
import { Observable, from, of } from 'rxjs';
import { FilmsData } from './films.data';
import { GenreService } from './genre.service';
import { ActorService } from './actor.service';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: FilmModel[] = [];
  
  constructor(private genreService: GenreService, private actorService: ActorService) {
    let filmsData = new FilmsData();
    let filmsDataArr: any[] = filmsData.getData();
    filmsDataArr.forEach(element => {
      let filmModel = new FilmModel(
        element.name, 
        element.lead, 
        element.description, 
        element.slug, 
        [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`),
        this.genreService.getRandomGenres(),
        this.actorService.getRandomActors(),
        element.rate, 
        element.duration, 
        element.reviews,
        element.fdate,
        element.cdate, 
        element.udate, 
        element.pdate
      );      
      this.films.push(filmModel);      
    });
    
  }
  
  getFilms() {
    return from(this.films);    
  }

  getFilmBySlug(slug) {
    for(let film of this.films) {
      if(slug == film.slug) {
        return of(film);
      }
    }
  }

  getFilmsByGenreSlug(slug) {
    let oneGenreFilms = [];
    for(let film of this.films) {
      let genre: any;
      for(genre of film.genre) {
        if(slug == genre.slug) {
          oneGenreFilms.push(film);          
        }
      }
    }
    return from(oneGenreFilms);
  }

  delete(film) {
    let i: number;
    let index = this.films.indexOf(film);
    if(index != -1) {
      this.films.splice(index, 1);
      return true;
    }
    return false;
  }
}
