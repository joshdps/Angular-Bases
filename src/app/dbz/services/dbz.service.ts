import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  // Propiedades
  private _personajes: Personaje[]=[
    {
      nombre:'Goku',
      poder: 15000
    }, {
      nombre:'Vegetta',
      poder: 7500
    }

  ];

  // Getters y Setters
  get personajes(): Personaje[]{
    return [...this._personajes];
  }

  constructor() { }

  // Metodos
  agregarPersonajes( nuevoPersonaje: Personaje){
    this._personajes.push( nuevoPersonaje)
    console.log(this._personajes);
    
  }

}
