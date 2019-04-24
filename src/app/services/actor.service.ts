import { Injectable } from '@angular/core';
import { ActorModel } from './../models/actor.model';
import { ActorsData } from './actors.data';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  actors: ActorModel[] = [];
  constructor() { 
    let actorsData = new ActorsData();
    let actorsDataArr: any[] = actorsData.getData();
    actorsDataArr.forEach(element => {
      let actorModel = new ActorModel(
        element.name,
        element.slug, 
        element.popularity,
        element.cdate,
        element.udate,
        element.pdate
      );
      this.actors.push(actorModel);
    });
  }

  getActors() {
    return from(this.actors);
  }

  getRandomActors( upTo?: number) {
    if(!upTo) {
      upTo = Math.floor(Math.random() * 4) + 1;;
    }
    let genresArr = [];
    for(let i = 0; i < upTo; i++) {
      let idx = Math.floor(Math.random() * this.actors.length - 1) + 1;
      genresArr.push(this.actors[idx]);
    }
    return genresArr;
    
  }
}
