import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/films', pathMatch: 'full' },
    { path: 'films', component: FilmsComponent },
    { path: 'films/:slug', component: FilmDetailComponent }
    
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