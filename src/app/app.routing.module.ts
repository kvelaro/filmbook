import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import { FilmDetailsComponent } from './films/film-details/film-details.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { GenresComponent } from './genres/genres.component';
import { GenresListComponent } from './genres/genres-list/genres-list.component';
import { GenreFilmsComponent } from './genres/genre-films/genre-films.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/films', pathMatch: 'full' },
    { path: 'films', component: FilmsComponent, children: [
        { path: '', component: FilmsListComponent },
        { path: ':slug', component: FilmDetailsComponent }
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