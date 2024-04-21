import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn: boolean = false;

  constructor() { }

  login(username: string, password: string): void {
    // Example login logic, replace with your actual login check
    if (username === 'admin' && password === '12345') {
      this.isLoggedIn = true;
      sessionStorage.setItem('isLoggedIn', 'true');
    } else {
      this.isLoggedIn = false;
      sessionStorage.setItem('isLoggedIn', 'false');
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('isLoggedIn');
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }


}
