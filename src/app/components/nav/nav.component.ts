import { Component, Output, inject } from '@angular/core';
import { EventEmitter } from 'stream';
import { NavigationService } from '../../services/navigation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  private navi=inject(NavigationService)
  mobilemenustate=0

navigationscroll(location:string){
  this.navi.currentlocation.next(location)
}

openmobilemenu(){
  this.mobilemenustate=1
}
navigate(location:string){
  this.mobilemenustate=2
  this.navigationscroll(location)
  setTimeout(() => {
  this.mobilemenustate=0
  }, 1000);
}
}
