import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
  isLoggedIn = true; // Assuming you have logic to determine login state

  constructor(private router: Router) { }

  ngOnInit(): void {
    // You can implement logic here to check if the user is logged in
    // For example: this.isLoggedIn = authService.isLoggedIn();
  }

  toggleLogin(): void {
    this.router.navigate(['/login']); 
  }

  logout(): void {
    
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

}

