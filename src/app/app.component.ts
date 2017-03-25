import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <router-outlet></router-outlet>
            </nav>
  `
})
export class AppComponent {
  title = 'CBA Quick Example';
}
