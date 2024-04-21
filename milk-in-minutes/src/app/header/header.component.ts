import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLinkActive,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  //isLoggedIn = false; // Assuming you have logic to determine login state

  isLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.isLoggedIn = this.authenticationService.isLoggedInUser();
  }
  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  }

  toggleLogin(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
    window.location.reload();
    alert('Do you want to logout?');
  }

}

