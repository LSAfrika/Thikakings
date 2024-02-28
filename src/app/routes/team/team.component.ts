import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { NavComponent } from '../../components/nav/nav.component';
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,
    
  
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

  closeuserprofile(){
    this.ui.openprofile.set(false)
  }

}
