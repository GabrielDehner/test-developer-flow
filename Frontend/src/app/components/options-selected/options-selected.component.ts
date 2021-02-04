import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-options-selected',
  templateUrl: './options-selected.component.html',
  styleUrls: ['./options-selected.component.css']
})
export class OptionsSelectedComponent implements OnInit {
  @Output() retornoCiudad = new EventEmitter<string>();

  arrayCities = [
    {value:"actual", description:"Ubicación Actual"},
    {value:"posadas", description:"Posadas"},
    {value:"obera", description:"Oberá"},
    {value:"cordoba", description:"Córdoba"},
    {value:"corrientes", description:"Corrientes"},
    {value:"mendoza", description:"Mendoza"},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  getWeather(city){
    // console.log("aca city");
    // console.log(city);
    this.retornoCiudad.emit(city);

  }
}
