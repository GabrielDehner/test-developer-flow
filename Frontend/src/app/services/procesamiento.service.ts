import { Injectable } from '@angular/core';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class ProcesamientoService {

  constructor() { }

  obtenerAPartirDeManiana(arrayClima:Weather[]){
    var arrayAuxiliar:Weather[]=[];
    var hoy= this.getFechaHoy();
    arrayClima.forEach((element)=>{ 
      // console.log(element.dt_txt.substring(0,10), hoy);
      if(element.dt_txt.substring(0,10)!=hoy){
        arrayAuxiliar[arrayAuxiliar.length]= element;
      }
    });
    return arrayAuxiliar;
  }
  getFechaHoy() {
    var hoy = new Date();
    var yyyymmdd = `${(hoy.getUTCFullYear())}-${this.addZero(hoy.getUTCMonth() + 1)}-${this.addZero(hoy.getUTCDate())}`;
    return yyyymmdd;
  }
  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
}
