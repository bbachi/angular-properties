import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  user: any;

  set userData(userData: any) {
    this.user = userData;
  }

  get userData() {
    return this.user;
  }
}
