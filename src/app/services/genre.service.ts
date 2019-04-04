import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { GenreModel } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  genre: string[] = [];
  constructor() { 

  }

  genres() {
    return from([
      new GenreModel('Action', 'action', 5, + new Date(), + new Date(), + new Date()),
      new GenreModel('Adventure', 'adventure', 7, + new Date(), + new Date(), + new Date()),
      new GenreModel('Biography', 'biography', 2, + new Date(), + new Date(), + new Date()),
      new GenreModel('Comedy', 'comedy', 8, + new Date(), + new Date(), + new Date()),
      new GenreModel('Crime', 'crime', 4, + new Date(), + new Date(), + new Date()),
      new GenreModel('Detective', 'detective', 6, + new Date(), + new Date(), + new Date()),
      new GenreModel('Documentary', 'documentary', 9, + new Date(), + new Date(), + new Date()),
      new GenreModel('Drama', 'drama', 1, + new Date(), + new Date(), + new Date()),
      new GenreModel('Fantasy', 'fantasy', 6, + new Date(), + new Date(), + new Date()),
      new GenreModel('Historical', 'historical', 4, + new Date(), + new Date(), + new Date()),
      new GenreModel('Horror', 'horror', 3, + new Date(), + new Date(), + new Date()),
      new GenreModel('Mystery', 'mystery', 6, + new Date(), + new Date(), + new Date()),
      new GenreModel('Philosophical', 'philosophical', 0, + new Date(), + new Date(), + new Date()),
      new GenreModel('Political', 'political', 4, + new Date(), + new Date(), + new Date()),
      new GenreModel('Romance', 'romance', 4, + new Date(), + new Date(), + new Date()),
      new GenreModel('Scientific', 'scientific', 10, + new Date(), + new Date(), + new Date()),
      new GenreModel('Social', 'social', 4, + new Date(), + new Date(), + new Date()),
      new GenreModel('Thriller', 'thriller', 6, + new Date(), + new Date(), + new Date()),
      new GenreModel('TV Series', 'tvseries', 8, + new Date(), + new Date(), + new Date())
    ]);
  }

  getGenres() {
    return this.genres();
  }
}
