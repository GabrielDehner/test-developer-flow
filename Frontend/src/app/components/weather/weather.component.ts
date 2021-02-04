import { Component, OnInit } from '@angular/core';
import { ApiWeatherService } from '../../services/api-weather.service';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
    private apiWeatherService: ApiWeatherService,
    private mensajesService: MensajesService,
  ) { }
  climaCiudad = null;
  dia = "Hoy";
  async ngOnInit() {
    this.mensajesService.procesando("Procesando...");
    try{
      var respuesta: any = await this.apiWeatherService.getLocation();
      if (respuesta) {
        this.apiWeatherService.current(respuesta.data.city)
          .subscribe((respuesta: any) => {
            // console.log(respuesta);
            this.climaCiudad = respuesta.data;
            this.mensajesService.terminarProceso();
          }, (error: any) => {
            this.mensajesService.terminarProceso();
            alert("error");
          })
      }
    }catch(error){
      this.mensajesService.mensajeError("Ha ocurrido un error en la solicitud.");

    }
    // console.log("rta weather");
    // console.log(respuesta);
    
  }
  async getWeather(city: string) {
    this.climaCiudad = null;
    this.mensajesService.procesando("Procesando...");
    if (city == "actual") {
      let respuesta: any = await this.apiWeatherService.getLocation();
      city = respuesta.data.city;
    }
    this.apiWeatherService.current(city)
      .subscribe((respuesta: any) => {
        // console.log(respuesta);
        this.climaCiudad = respuesta.data;
        this.mensajesService.terminarProceso();
      }, (error: any) => {
        this.mensajesService.terminarProceso();
        alert("error");
      })
  }

}
