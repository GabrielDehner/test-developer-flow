import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiWeatherService } from '../../services/api-weather.service';
import { environment } from '../../../environments/environment';
import { Weather } from 'src/app/models/weather';
import { ProcesamientoService } from '../../services/procesamiento.service';
import { MensajesService } from 'src/app/services/mensajes.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit, OnChanges {
  @Input() datosCiudad: any;
  urlWeatherIcon = environment.urlWeatherIcon
  constructor(
    private apiWeatherService: ApiWeatherService,
    private procesamientoService: ProcesamientoService,
    private mensajesService: MensajesService,
  ) { }
  cincoDias:Weather[]=null;
  ngOnInit(): void {
    // console.log(this.datosCiudad)
    this.cincoDias= null;
  }
  ngOnChanges() {
    // console.log('cambios');
    this.ngOnInit();
  }
  forecast(city) {
    // console.log(city);
    this.mensajesService.procesando("Procesando...");
    this.apiWeatherService.forecast(city)
      .subscribe((respuesta: any) => {
        // console.log(respuesta);
        // this.cincoDias = respuesta.data.list;
        this.mensajesService.terminarProceso();
        if(respuesta.data){
          this.cincoDias = this.procesamientoService.obtenerAPartirDeManiana(respuesta.data.list);
        }else{
          this.mensajesService.mensajeError("Ha ocurrido un error al realizar la solicitud.");  
        }
        
      }, (error: any) => {
        this.mensajesService.terminarProceso();
        alert("error");
      })
  }

}
