import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './interfaces/pokemon/pokemon-detail/pokemon-detail.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayersComponent } from './players/players.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'players', component:PlayersComponent},
  {path:'player/:id', component:PlayerDetailComponent}, // /:id pour utiliser un get pour le détail d'un joueur
  {path:'pokemons', component:PokemonComponent},
  {path:'pokemon/:id', component:PokemonDetailComponent},
  {path:'create', component:CreatePlayerComponent},
  {path:'api', component:ApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
