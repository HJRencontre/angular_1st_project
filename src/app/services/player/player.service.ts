import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from 'src/app/interfaces/player/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private _http: HttpClient) { }


  getPlayer(): Player[]{
    return [
    {id:1, name:"Marshall Law", size: 179, weight:69, image:"law.webp", description:"C'est un combattant utilisant le Jeet Kune Do, un art martial crée par Bruce Lee. Marshall est d'ailleurs un personnage fort inspiré par lui."},
    {id:2, name:"Marshall Law", size: 179, weight:69, image:"law.webp", description:"C'est un combattant utilisant le Jeet Kune Do, un art martial crée par Bruce Lee. Marshall est d'ailleurs un personnage fort inspiré par lui."},
    {id:3, name:"Marshall Law", size: 179, weight:69, image:"law.webp", description:"C'est un combattant utilisant le Jeet Kune Do, un art martial crée par Bruce Lee. Marshall est d'ailleurs un personnage fort inspiré par lui."},
    {id:4, name:"Marshall Law", size: 179, weight:69, image:"law.webp", description:"C'est un combattant utilisant le Jeet Kune Do, un art martial crée par Bruce Lee. Marshall est d'ailleurs un personnage fort inspiré par lui."},
    ]  
  }

  postPlayer(data: any){
    return this._http.post('', data);
  }
}
