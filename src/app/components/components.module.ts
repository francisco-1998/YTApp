import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';



@NgModule({
  declarations: [NavbarComponent, TarjetaComponent],
  imports: [
    CommonModule
  ],exports :[
    NavbarComponent,
    TarjetaComponent
  ]
})
export class ComponentsModule { }
