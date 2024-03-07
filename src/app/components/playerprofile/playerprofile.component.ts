import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { PlayerdataService } from '../../services/playerdata.service';

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


closeuserprofile(){
  this.ui.openprofile.set(false)
}
}
