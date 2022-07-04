import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = ''

  borrarHeroe(){
    
    console.log(`borrando a ${this.heroes.length-1}`)
    this.heroeBorrado = this.heroes?.pop() || '';
    console.log(`Borrado`)
  }


}
