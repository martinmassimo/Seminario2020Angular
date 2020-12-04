import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { CuchillosComponent } from './cuchillos/cuchillos.component';

const routes: Routes = [
  {
    path : '', 
    component: CuchillosComponent
  },
  {
    path : 'acerca', 
    component: AcercaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
