import { Component } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon/pokemon';
import { PokemonService } from '../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
pokemons:Pokemon[]=[];

constructor(private pokemonService:PokemonService){

}

ngOnInit(){
  this.pokemons = this.pokemonService.getPokemon();
}
}
