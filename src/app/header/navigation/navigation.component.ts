import { Component, OnInit } from '@angular/core';
import { GenreService } from './../../services/genre.service';
import { GenreModel } from 'src/app/models/genre.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  genres: GenreModel[] = [];
  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenres().subscribe(genre => {
      this.genres.push(genre);
    })
  }

}
