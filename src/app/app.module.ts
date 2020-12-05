import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuchillosListComponent } from './cuchillos-list/cuchillos-list.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { CuchillosComponent } from './cuchillos/cuchillos.component';
import { AcercaComponent } from './acerca/acerca.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    CuchillosListComponent,
    CarritoComponent,
    CuchillosComponent,
    AcercaComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
