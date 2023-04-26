import { Component } from '@angular/core';
import { Player } from '../interfaces/player/player';
import { PlayerService } from '../services/player/player.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  players:Player[]=[];
  
  constructor(private playerService:PlayerService){
    
  }
  
  //Execute les commandes à l'appel du composant
  ngOnInit(){
    this.players = this.playerService.getPlayer();
  }

}
