import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import { FilmDetailsComponent } from './films/film-details/film-details.component';
import { FilmsListComponent } from './films/films-list/films-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/films', pathMatch: 'full' },
    { path: 'films', component: FilmsComponent, children: [
        { path: '', component: FilmsListComponent },
        { path: ':slug', component: FilmDetailsComponent }
    ] },
    { path: 'films/:slug', component: FilmComponent }
    
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