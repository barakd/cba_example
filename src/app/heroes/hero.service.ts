import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {
  public getHeroes(){
    return Promise.resolve(HEROES);
  }
  public getHero(id: number) {
  return Promise.resolve(HEROES).then(
    heroes => heroes.filter(hero => hero.id === id)[0]
  );
  }
  updateHero(updatedHero) {
        return this.getHero(updatedHero.id).then((hero) => {
            Object.assign(hero, updatedHero);
});
}

}

