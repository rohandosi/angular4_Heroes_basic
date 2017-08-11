import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import  { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.modules';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports:      [ BrowserModule,
                   FormsModule,
                  AppRoutingModule
                ],
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent
                ],
providers: [
HeroService
],
bootstrap:    [ AppComponent ]
})
export class AppModule { }
