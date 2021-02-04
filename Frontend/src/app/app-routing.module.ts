import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: '', component: WeatherComponent},
  
  {path: 'weather', component: WeatherComponent},

  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
