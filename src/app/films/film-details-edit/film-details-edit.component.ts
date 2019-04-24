import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from './../../services/films.service';
import { FilmModel } from './../../models/film.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-film-details-edit',
  templateUrl: './film-details-edit.component.html',
  styleUrls: ['./film-details-edit.component.css']
})
export class FilmDetailsEditComponent implements OnInit {
  film: FilmModel;
  filmGenres: string = '';
  filmActors: string = '';
  filmDate: string;
  publishDate: string;
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsService,
    private router : Router
    ) { 
   
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let slug = params.slug;
      this.filmService.getFilmBySlug(slug).subscribe(film => {
        let genre: any;
        let actor: any;
        this.film = film;
        let fdate = new Date(this.film.fdate);
        let date = (fdate.getDate() < 10) ? '0' + fdate.getDate() : fdate.getDate(); 
        let month = (fdate.getMonth() < 10) ? '0' + fdate.getMonth() : fdate.getMonth(); 
        this.filmDate =  date + '.' + month + '.' + fdate.getFullYear();
        
        let pdate = new Date(this.film.pdate);
        date = (fdate.getDate() < 10) ? '0' + fdate.getDate() : fdate.getDate(); 
        month = (fdate.getMonth() < 10) ? '0' + fdate.getMonth() : fdate.getMonth(); 
        this.publishDate =  date + '.' + month + '.' + pdate.getFullYear();
        
        for(genre of film.genre) {
          if(this.filmGenres.length > 0) {
            this.filmGenres += ', ';
          }
          this.filmGenres += genre.name;
        }
        for(actor of film.actors) {
          if(this.filmActors.length > 0) {
            this.filmActors += ', ';
          }
          this.filmActors += actor.name;          
        }
      });
    });
  }

  onSubmit(filmForm: NgForm) {
     console.log(filmForm.value)
    /*
    private name: string, 
      private lead: string,
      private description: string, 
      public slug: string,
      private images: string[], 
      public genre: string[], 
      private actors: string[],
      public rate: number,
      private duration: number, 
      private reviews: string[], 
      public fdate: number, 
      private cdate: number, 
      private udate: number, 
      public pdate: number
      */
  }
}
