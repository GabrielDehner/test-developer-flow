import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {

  constructor(
    private http: HttpClient,
  ) { }

  getLocation() {
    return new Promise((resolve, reject)=>{
      this.http.get(environment.urlApiWeather + 'location')
      .subscribe((respuesta:any)=>{
        resolve(respuesta);
      }, (error)=>{
        resolve(false);
      })
    }) 
  }
  current(city:string) {
    return this.http.get(environment.urlApiWeather + 'current/'+city);
  }
  forecast(city:string) {
    return this.http.get(environment.urlApiWeather + 'forecast/'+city);
  }
}
