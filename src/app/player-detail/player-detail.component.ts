import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/player/player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {
  playerDetail:any=[];
  playerId:any;

  constructor(private activeRoute: ActivatedRoute, private playerService: PlayerService){

  }

  ngOnInit(){
    this.playerId = this.activeRoute.snapshot.paramMap.get('id'); //Récupérer l'ID par la route active
    this.playerDetail = this.playerService.getPlayer().filter(player => player.id == this.playerId); //Appel de la méthode get avec filtre 
    console.log(this.playerDetail);
  }


}
