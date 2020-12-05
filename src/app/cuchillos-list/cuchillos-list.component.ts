import { Component, OnInit } from '@angular/core';
import { CuchilloDataService } from '../cuchillo-data.service';
import { CuchillosCarritoService } from '../cuchillos-carrito.service';
import { Cuchillo } from './cuchillo';

@Component({
  selector: 'app-cuchillos-list',
  templateUrl: './cuchillos-list.component.html',
  styleUrls: ['./cuchillos-list.component.scss']
})
export class CuchillosListComponent implements OnInit {

  cuchillos : Cuchillo [] = [];
  
  constructor(
    private carrito : CuchillosCarritoService,
    private cuchillosDataService: CuchilloDataService) {
   }

  ngOnInit(): void {
    this.cuchillosDataService.getAll().subscribe(cuchillos => this.cuchillos = cuchillos);
  }

  agregarCarrito(cuchillo: Cuchillo): void{
    if(cuchillo.cantidad>0){
      cuchillo.stock -= cuchillo.cantidad;
      this.carrito.agregarCarrito(cuchillo);
      cuchillo.cantidad = 0;
    }
  }
}
