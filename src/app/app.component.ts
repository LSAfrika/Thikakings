import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ManagementComponent } from './components/management/management.component';
import { FooterComponent } from './components/footer/footer.component';
import { TheteamComponent } from './components/theteam/theteam.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CommonModule, Location } from '@angular/common';
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
            TeamComponent,
            CommonModule

          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Thikakings';


  location=inject(Location)
  public navi=inject(NavigationService)
  destroy$=new Subject<void>()
  constructor(){


  }

  ngAfterViewInit(){

    console.log('view inintiated',document);
    
    this.navi.currentlocation.pipe(
      tap(location=>{this.scrolltocontent(location),console.log('current location: ',location)}),
      takeUntil(this.destroy$)

    ).subscribe(console.log)
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }
  scrolltocontent(location: string) {
    // this.scroller.scrollToAnchor("contacts");
    if (location === 'hero') { this.location.go('#hero') }
    if (location === 'team') { this.location.go('#team') }
    if (location === 'management  ') { this.location.go('#management') }
    if (location === 'contactus') { this.location.go('#contactus') }
    // if (location === 'contacts') {  this.location.go('#contacts')}


  

     document.getElementById(location)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      }); 
   
  }

 
}
