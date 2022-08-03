import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
//  Tarea 
//  Crear un modulo llamado contadorModule
//  declaracion y exportaciones
import { contadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //importar aqui
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
