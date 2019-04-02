import { Injectable } from '@angular/core';
import { FilmModel } from './../models/film.model';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  constructor() { }

  getFilms() {
    return from([
      new FilmModel(
      'Avengers: Endgame', 
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
      "avengers-endgame",
      [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`),
      ['Action', 'Adventure', 'Fantasy'],
      ['Christopher Markus', 'Stephen McFeely'],
      4.5,
      160,
      [],
      + new Date(),
      + new Date(),
      + new Date(),
      null
    ),
    new FilmModel(
      
      'Godzilla: King of the Monsters', 
      "The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.",
      "The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.",
      "godzilla-king-of-the-monsters",
      [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`),
      ['Action', 'Horror'],
      ['Michael Dougherty', ' Zach Shields'],
      1,
      120,
      [],
      + new Date(),
      + new Date(),
      + new Date(),
      null
    )    
  ]);
    
  }
}
