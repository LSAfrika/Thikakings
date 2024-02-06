import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-theteam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theteam.component.html',
  styleUrl: './theteam.component.scss'
})
export class TheteamComponent {
navi=inject(NavigationService)

  viewfullteam(){
    this.navi.viewteam.set(true)
  }
  closeteamview(){
    this.navi.viewteam.set(false)

  }

}
