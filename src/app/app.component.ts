import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { NavigationService } from './services/navigation.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { TeamComponent } from './routes/team/team.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { initializeApp } from "firebase/app";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    
                 ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Thikakings';

  http=inject(HttpClient)
  location=inject(Location)
  public navi=inject(NavigationService)
  destroy$=new Subject<void>()
 


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAvmLopAxS_AdJVipbI0Jtnm8NAiiWFTTw",
//   authDomain: "thikakingss.firebaseapp.com",
//   projectId: "thikakingss",
//   storageBucket: "thikakingss.appspot.com",
//   messagingSenderId: "362531708804",
//   appId: "1:362531708804:web:55d07ea238697159e007d1"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


  constructor(){



  }

  ngAfterViewInit(){

  
    
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
