import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {


  disablemobilemenu=false
  currentroute='/'
  location=inject(Router)
currentlocation= new Subject<string>()
viewteam=signal(false)
constructor() { 

  console.log(this.viewteam());
  
}
}
