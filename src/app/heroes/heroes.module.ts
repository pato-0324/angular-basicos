import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    //que cosas contiene este modulo (componentes)
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //cosas que hare publicas
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    //modulos
    imports:[
        CommonModule
    ]

})
export class HeroesModule{

}