import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
  <h3>Top Heroes</h3>
<div class="grid grid-pad">
  <div *ngFor="let hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </div>
</div>`
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }
  ngOnInit() {
  this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes.slice(1, 5));
}
gotoDetail(hero: Hero) {
  const link = ['/hero', hero.id ];
  this.router.navigate(link);
}
 }
