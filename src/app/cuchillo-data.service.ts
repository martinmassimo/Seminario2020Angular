import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuchillo } from './cuchillos-list/cuchillo';
import { tap } from 'rxjs/operators'

const URL = 'https://5fcbc39051f70e00161f1ffc.mockapi.io/api/cuchillos';

@Injectable({
  providedIn: 'root'
})
export class CuchilloDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Cuchillo[]> {
    return this.http.get<Cuchillo[]>(URL)
    .pipe(tap((cuchillos: Cuchillo[]) => cuchillos.forEach(cuchillo => cuchillo.cantidad = 0)))
  }
}
