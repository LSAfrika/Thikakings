import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {


  location=inject(Router)
currentlocation= new BehaviorSubject<string>('hero')

constructor() { 

  
}
}
