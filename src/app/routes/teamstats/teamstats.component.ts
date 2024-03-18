import { Component, HostListener, Inject, inject } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { CommonModule } from '@angular/common';
import { PlayerprofileComponent } from '../../components/playerprofile/playerprofile.component';
import { UiService } from '../../service/ui.service';
import { PlayerdataService } from '../../services/playerdata.service';
import { Player } from '../../models/player.interface';

@Component({
  selector: 'app-teamstats',
  standalone: true,
  imports: [CommonModule,
    NavComponent,
    PlayerprofileComponent
  ],
  templateUrl: './teamstats.component.html',
  styleUrl: './teamstats.component.scss'
})
export class TeamstatsComponent {

  public ui=inject(UiService)
  private router=inject(Router)
  private navi=inject(NavigationService)
  public playerdata=inject(PlayerdataService)
  // SW=window.innerWidth||0
  // @HostListener('window:resize', ['$event']) onResize() {

    
  //   this.SW = window.innerWidth;
   





  // }

  seasons=['23/24','22/23']
active=1
  constructor(){
    this.navi.currentroute=this.router.url

    this.navi.disablenavlinks.set(true)

  }

  ngOnDestroy(){
    this.navi.disablenavlinks.set(false)

  }

  activetab(select:number){

    this.active=select
  }

  openplayerprofile(player:Player){
    this.ui.openprofile.set(true)
    this.playerdata.player=player
  }

}
