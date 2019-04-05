import { Component, OnInit, Input } from '@angular/core';
import { FilmModel } from './../../models/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() film: FilmModel;
  filmGenres: string = '';
  constructor() {
    
   }

  ngOnInit() {
    this.film.genre.forEach(element => {
      if(this.filmGenres.length > 0) {
        this.filmGenres += ', ';
      }
      this.filmGenres += element.name;
    })
  }

}
