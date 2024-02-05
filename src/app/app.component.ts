import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ManagementComponent } from './components/management/management.component';
import { FooterComponent } from './components/footer/footer.component';
import { TheteamComponent } from './components/theteam/theteam.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { Location } from '@angular/common';
import { NavigationService } from './services/navigation.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { TeamComponent } from './routes/team/team.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            NavComponent,
            HeroComponent,
            TheteamComponent,
            ManagementComponent,
            FooterComponent,
            ContactusComponent,
            TeamComponent

          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Thikakings';

  location=inject(Location)
  navi=inject(NavigationService)
  destroy$=new Subject<void>()
  constructor(){


  }

  ngAfterViewInit(){

    console.log('view inintiated');
    
    this.navi.currentlocation.pipe(
      tap(location=>{this.scrolltocontent(location),console.log('current location: ',location)}),
      takeUntil(this.destroy$)

    ).subscribe()
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }
  scrolltocontent(location: string) {
    // this.scroller.scrollToAnchor("contacts");
    if (location === 'home') { this.location.go('#home') }
    if (location === 'about') { this.location.go('#about') }
    if (location === 'services') { this.location.go('#services') }
    if (location === 'portfolio') { this.location.go('#portfolio') }
    if (location === 'contacts') {  this.location.go('#contacts')}


    document.getElementById(location)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }); 
  }
}
