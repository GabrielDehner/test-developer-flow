import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { Page404Component } from './components/page404/page404.component';
import { CityComponent } from './components/city/city.component';
import { OptionsSelectedComponent } from './components/options-selected/options-selected.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DayComponent } from './components/day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    Page404Component,
    CityComponent,
    OptionsSelectedComponent,
    NavbarComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
