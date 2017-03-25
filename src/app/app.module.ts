import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroDisplayComponent } from './heroes/hero-display.component';
import { DashboardComponent } from './heroes/dashboard.component';
import { HeroService } from './heroes/hero.service';
const appRoutes = [{
  path: 'hero/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent,
}, {
    path: 'dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
        RouterModule.forRoot(appRoutes)

  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
