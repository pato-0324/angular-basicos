import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
    heroeBorrado2: string[] = [];
    borrado: string|undefined = '';
    mostrar: boolean = true;
    titulo: boolean = false;


    borrarHeroe(){
      this.borrado = this.heroes.shift();
      this.heroeBorrado2.push(this.borrado || 'prueba');
      this.titulo = true;

      if (this.borrado == undefined)
        this.mostrar = false;
        console.log(this.mostrar)
    }

}
