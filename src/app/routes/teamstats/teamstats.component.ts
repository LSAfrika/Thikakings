import { Component, inject } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-teamstats',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './teamstats.component.html',
  styleUrl: './teamstats.component.scss'
})
export class TeamstatsComponent {

  private router=inject(Router)
  private navi=inject(NavigationService)

  constructor(){
    this.navi.currentroute=this.router.url

  }

}
