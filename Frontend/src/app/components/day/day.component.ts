import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather } from '../../models/weather';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit, OnChanges {

  @Input() listaClima:Weather[];
  @Input() indice:string;
  urlWeatherIcon = environment.urlWeatherIcon

  constructor() { }

  ngOnInit(): void {
    // console.log(this.listaClima);
  }
  ngOnChanges() {
    // console.log('cambios dias');
    this.ngOnInit();
  }

}
