import { Component, OnInit, OnChanges, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-display',
  template:  `
  <div>
    <h2>{{editHero.name}} details!</h2>
    <div><label>id: </label>{{editHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="editHero.name" placeholder="name"/>
    </div>
    <button (click)="save()">Save</button>
  </div>
`,
})
export class HeroDisplayComponent implements OnInit, OnChanges {
@Input() hero: Hero;
@Output() onSave = new EventEmitter<Hero>();
private editHero: Hero;
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
      this.editHero = { ...this.hero };
}
 save() {
   this.onSave.emit(this.editHero);
 }

}
