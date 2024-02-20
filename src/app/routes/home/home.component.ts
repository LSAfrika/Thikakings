import { CommonModule,Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContactusComponent } from '../../components/contactus/contactus.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ManagementComponent } from '../../components/management/management.component';
import { NavComponent } from '../../components/nav/nav.component';
import { TheteamComponent } from '../../components/theteam/theteam.component';
import { TeamComponent } from '../team/team.component';
import { Subject } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    TheteamComponent,
    ManagementComponent,
    FooterComponent,
    ContactusComponent,
    TeamComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  location=inject(Location)
  public navi=inject(NavigationService)
  destroy$=new Subject<void>()

}
