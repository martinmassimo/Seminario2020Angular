import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CuchillosCarritoService } from '../cuchillos-carrito.service';
import { Cuchillo } from '../cuchillos-list/cuchillo';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carritoLista$: Observable<Cuchillo[]>;
  constructor(private carrito : CuchillosCarritoService) {
    this.carritoLista$ = carrito.carrito.asObservable();
   }

  ngOnInit(): void {
  }

}
