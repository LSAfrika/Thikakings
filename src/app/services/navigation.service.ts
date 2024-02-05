import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {


  location=inject(Router)
currentlocation= new BehaviorSubject<string>('hero')
viewteam=signal(true)
constructor() { 

  
}
}
