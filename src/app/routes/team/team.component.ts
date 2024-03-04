import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { NavComponent } from '../../components/nav/nav.component';
import { UiService } from '../../service/ui.service';
import { PlayerprofileComponent } from '../../components/playerprofile/playerprofile.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,
    PlayerprofileComponent
    
  
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

  navi=inject(NavigationService)
  ui=inject(UiService)

  closeteamview(){
    this.navi.viewteam.set(false)

  }

  openuserprofile(){
    this.ui.openprofile.set(true)
  }



}
