import { Component, Input, OnInit } from '@angular/core';
import { Cuchillo } from '../cuchillos-list/cuchillo';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  
  @Input()
  cuchillo! : Cuchillo;

  sumarCantidad(cuchillo : Cuchillo): void{
    if(cuchillo.cantidad<cuchillo.stock){
      cuchillo.cantidad++
    }
  }
  restarCantidad(cuchillo : Cuchillo): void{
    if (cuchillo.cantidad>0){
      cuchillo.cantidad--
    }
  }
  cambioCantidad(cuchillo: Cuchillo): void{
    if(cuchillo.cantidad>cuchillo.stock){
      cuchillo.cantidad = cuchillo.stock;
    } else if (cuchillo.cantidad<cuchillo.stock){
      cuchillo.cantidad = 0;
    }
  }
  ngOnInit(): void {
  }

}
