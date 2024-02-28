import { Injectable, signal } from '@angular/core';
import { sign } from 'node:crypto';

@Injectable({
  providedIn: 'root'
})
export class UiService {

openprofile=signal(false)

  constructor() { }
}
