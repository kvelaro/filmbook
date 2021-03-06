import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import { FilmDetailsComponent } from './films/film-details/film-details.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { GenresComponent } from './genres/genres.component';
import { GenresListComponent } from './genres/genres-list/genres-list.component';
import { GenreFilmsComponent } from './genres/genre-films/genre-films.component';
import { NewFilmComponent } from './films/new-film/new-film.component';
import { FilmDetailsEditComponent } from './films/film-details-edit/film-details-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/films', pathMatch: 'full' },
    { path: 'films', component: FilmsComponent, children: [
        { path: '', component: FilmsListComponent },
        { path: 'new', component: NewFilmComponent },
        { path: ':slug', component: FilmDetailsComponent },
        { path: ':slug/edit', component: FilmDetailsEditComponent }
    ]},
    { path: 'genre', component: GenresComponent, children: [
        { path: '', component: GenresListComponent },
        { path: ':slug', component: GenreFilmsComponent }
    ]}    
];
@NgModule({
    imports: [    
    RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}