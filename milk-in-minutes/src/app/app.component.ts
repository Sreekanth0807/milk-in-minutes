import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      LoginComponent,
      RegisterComponent,
      RouterOutlet,
      HeaderComponent,
      RouterLink,
      RouterLinkActive,
      RouterOutlet
    ]
})
export class AppComponent {
  title = 'milk-in-minutes';
}
