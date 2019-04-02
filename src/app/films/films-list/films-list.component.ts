import { Component, OnInit, Output } from '@angular/core';
import { FilmModel } from '../../models/film.model';
import { FilmsService } from './../../services/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  @Output() films: FilmModel[] = [];
  constructor(private filmsService: FilmsService) {
    
   }

  ngOnInit() {
    this.filmsService.getFilms().subscribe(film => {      
      this.films.push(film);
    });
  }

}
