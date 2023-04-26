import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  pokemonDetail:any=[];
  pokemonId:any;

  constructor(private activeRoute:ActivatedRoute, private pokemonService: PokemonService){
    
  }

  ngOnInit(){
    this.pokemonId = this.activeRoute.snapshot.paramMap.get('id');
    this.pokemonDetail = this.pokemonService.getPokemon().filter(pokemon => pokemon.id == this.pokemonId);
    console.log(this.pokemonDetail);
  }

}
