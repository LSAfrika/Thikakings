import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UiService {

openprofile=signal(false)

  constructor() { }
}
