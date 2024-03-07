import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { PlayerdataService } from '../../services/playerdata.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-playerprofile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playerprofile.component.html',
  styleUrl: './playerprofile.component.scss'
})
export class PlayerprofileComponent {
public ui=inject(UiService)
public playerdata=inject(PlayerdataService)
public navigation=inject(NavigationService)

constructor(){
  console.log(this.navigation.currentroute);
  
}

closeuserprofile(){
  this.ui.openprofile.set(false)
}
}
