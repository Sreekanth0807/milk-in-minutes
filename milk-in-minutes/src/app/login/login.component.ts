import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { NavigationExtras, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    RouterLinkActive,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup = new FormGroup({}); 
  hidePassword: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

 

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     // Submit login credentials (Example)
  //     console.log(this.loginForm.value);
  //   }
  //   alert("successfully loggedin");
  //   window.location.reload();
  // }

  onSubmit() {
    if (this.loginForm.valid) {
      // Submit login credentials (Example)
      console.log(this.loginForm.value);
      alert("successfully logged in");
 
      // Redirect with refresh
      this.router.navigate(['/home'], { skipLocationChange: true });
      };
     
    }
     
  }
 



