import { Component, OnInit } from '@angular/core';
import { FilmModel } from '../../models/film.model';
import { FilmsService } from './../../services/films.service';
import { ActivatedRoute } from '@angular/router';
import { GenreModel } from 'src/app/models/genre.model';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film: FilmModel = null;
  stars: number[] = [];
  filmGenres: string = '';
  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute
  ) {
      
   }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.filmsService.getFilmBySlug(x.slug).subscribe(film => {
        this.film = film;
        let rate = Math.floor(film.rate);
        this.stars = Array(rate).fill(rate).map((x, i) => i);
        let genre:any;
        for(genre of film.genre) {
          if(this.filmGenres.length > 0) {
            this.filmGenres += ', ';
          }
          this.filmGenres += genre.name;
        }        
      })
    });
  }

}
