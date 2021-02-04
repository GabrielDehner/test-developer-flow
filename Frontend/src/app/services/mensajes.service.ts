import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  mensajeCorrecto(parametro){
    Swal.fire(
      "Excelente!",
      `${parametro}`,
      "success"
    )
  }
  mensajeAtencion(parametro){
    Swal.fire(
      "Atención!",
      `${parametro}`,
      "warning"
    )
  }
  mensajeError(parametro){
    Swal.fire(
      "Error!",
      `${parametro}`,
      "error"
    )
  }
  mensaje(titulo, mensaje, tipo){
    Swal.fire(
      `${titulo}`,
      `${mensaje}`,
      tipo
    )
  }
  mensajeWithThen(titulo, mensaje, tipo, then){
    Swal.fire(
      `${titulo}`,
      `${mensaje}`,
      tipo
    ).then((res)=>{
      console.log(res);
      if(then && res){
        // console.log('reload');
        location.reload();
      }
    })
  }
  procesando(titulo) {
    Swal.fire({
      text: `${titulo}`,
      allowOutsideClick: false,
      icon: "info",
      width: '450px',
    });
    Swal.showLoading();
  }
  terminarProceso() {
    Swal.close();
  }
}
