import { Component, OnInit } from '@angular/core';
import { FilmsService } from './../../services/films.service';
import { ActivatedRoute } from '@angular/router';
import { FilmModel } from 'src/app/models/film.model';

@Component({
  selector: 'app-genre-films',
  templateUrl: './genre-films.component.html',
  styleUrls: ['./genre-films.component.css']
})
export class GenreFilmsComponent implements OnInit {
  films: FilmModel[] = [];
  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.films = [];
      this.filmsService.getFilmsByGenreSlug(x.slug).subscribe(film => {        
        this.films.push(film);
      })
    });    
  }

}
