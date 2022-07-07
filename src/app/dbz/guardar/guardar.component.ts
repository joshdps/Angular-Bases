import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

  nuevo: Personaje={
    nombre: '',
    poder:0
  };


  agregar(){
    if ( this.nuevo.nombre.trim().length === 0 ){
      return
    }
    this.dbzService.agregarPersonajes(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  constructor(private  dbzService: DbzService){ }
}
