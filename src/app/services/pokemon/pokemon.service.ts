import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemon():Pokemon[]{
    return[
      {id:1, name:"Pikachu", type:"Eclair", image:"pikachu.png"}
    ]
  }
}
