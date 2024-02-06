import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

  navi=inject(NavigationService)


  closeteamview(){
    this.navi.viewteam.set(false)

  }

}
