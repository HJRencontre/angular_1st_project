import { Component } from '@angular/core';
import { PlayerService } from '../services/player/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent {

constructor(private playerService:PlayerService){
  
}

  submit(data:any){
    this.playerService.postPlayer(data);
    console.log(data);
  }
}
