import { Component, Output, inject } from '@angular/core';
import { EventEmitter } from 'stream';
import { NavigationService } from '../../services/navigation.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  private router=inject(Router)
   navi=inject(NavigationService)
  mobilemenustate=0

constructor(){
  console.log(this.navi.disablemobilemenu);
  console.log(this.router.url);

  if(this.router.url!='/') this.navi.disablemobilemenu=true
  console.log(this.navi.disablemobilemenu);
  
}

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

navigatetoteamnews(){
  console.log('navigation happening');
  this.navi.currentroute=this.router.url
  this.mobilemenustate=2
this.router.navigateByUrl('/teamstats')
  setTimeout(() => {
  this.mobilemenustate=0
  }, 1000);
}

navigatehome(){
this.router.navigateByUrl('/')
this.navi.currentroute='/'
console.log(this.navi.currentroute);



}
}
