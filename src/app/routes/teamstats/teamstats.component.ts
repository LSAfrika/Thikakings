import { Component, inject } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teamstats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teamstats.component.html',
  styleUrl: './teamstats.component.scss'
})
export class TeamstatsComponent {

  private router=inject(Router)
  private navi=inject(NavigationService)

  seasons=['23/24','22/23']
active=4
  constructor(){
    this.navi.currentroute=this.router.url

  }

  activetab(select:number){

    this.active=select
  }

}
