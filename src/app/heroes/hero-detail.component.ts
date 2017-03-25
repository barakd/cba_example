import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';
import { Params, ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-hero-detail',
    template: `
  <h3 *ngIf="message">{{message}}</h3>
  <app-hero-display *ngIf="hero" (onSave)="updateHero($event)" [hero]="hero"></app-hero-display>
  <button type="button" (click)="goBack()">Back</button>
  `,
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;
    message: String;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.route.params
            // (+) converts string 'id' to a number
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe((hero: Hero) => this.hero = hero);
    }
    updateHero(updatedHero) {
        this.heroService.updateHero(updatedHero).then(() => {
            this.message = 'saved!';
        });
}
 goBack() {
  window.history.back();
}
}
