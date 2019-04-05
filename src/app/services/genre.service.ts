import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { GenreModel } from '../models/genre.model';
import { GenresData } from './genres.data';


@Injectable({
  providedIn: 'root'
})
export class GenreService {
  genres: GenreModel[] = [];
  constructor() { 
    let genresData = new GenresData();
    let genresDataArr: any[] = genresData.getData();
    genresDataArr.forEach(element => {
      let genreModel = new GenreModel(
        element.name,
        element.slug, 
        element.popularity,
        element.cdate,
        element.udate,
        element.pdate
      );
      this.genres.push(genreModel);
    });
  }

  getGenres() {
    return from(this.genres);
  }

  getRandomGenres( upTo?: number) {
    if(!upTo) {
      upTo = Math.floor(Math.random() * 4) + 1;;
    }
    let genresArr = [];
    for(let i = 0; i < upTo; i++) {
      let idx = Math.floor(Math.random() * this.genres.length - 1) + 1;
      genresArr.push(this.genres[idx]);
    }
    return genresArr;
    
  }
}
