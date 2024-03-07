import { Injectable } from '@angular/core';
import playerstats from '../../../playerstats.json'
import { Player } from '../models/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerdataService {

public playerprofiles:any[]=[]
player!:Player
  constructor() {

    this.playerprofiles=playerstats 
   }
}
