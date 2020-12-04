import { Component, OnInit } from '@angular/core';
import { Cuchillo } from './cuchillo';

@Component({
  selector: 'app-cuchillos-list',
  templateUrl: './cuchillos-list.component.html',
  styleUrls: ['./cuchillos-list.component.scss']
})
export class CuchillosListComponent implements OnInit {

  cuchillos : Cuchillo [] = [
    {
      "nombre" : "Regional",
      "tipo" : "Puñal",
      "precio" : 1200,
      "stock" : 0,
      "cantidad" : 0,
    },
    {
      "nombre" : "Alpaca",
      "tipo" : "Daga",
      "precio" : 2600,
      "stock" : 9,
      "cantidad" : 0,
    },
    {
      "nombre" : "Trenzado",
      "tipo" : "Puñal",
      "precio" : 1800,
      "stock" : 16,
      "cantidad" : 0,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }



}
