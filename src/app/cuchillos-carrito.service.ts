import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cuchillo } from './cuchillos-list/cuchillo';

@Injectable({
  providedIn: 'root'
})
export class CuchillosCarritoService {
  
  private _carrito: Cuchillo[] = [];

  carrito: BehaviorSubject<Cuchillo[]> = new BehaviorSubject(this._carrito);
  
  constructor() { }
  
  agregarCarrito(cuchillo: Cuchillo) {
    let item: Cuchillo = this._carrito.find((v1) => v1.nombre == cuchillo.nombre)!;
    if (!item){
      this._carrito.push({ ...cuchillo});
    }
    else {
      item.cantidad+= cuchillo.cantidad;
    }
    this.carrito.next(this._carrito);
  }
}
