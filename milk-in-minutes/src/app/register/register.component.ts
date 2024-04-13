import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserDetails } from '../product.model';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  userDetails: UserDetails[] = [];

  registerForm: FormGroup = new FormGroup({}); // No need to initialize with a new FormGroup()
  hidePassword = true; 

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const userDetails: UserDetails = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        id: 0
      };
  
    
      this.userDetails.push(userDetails);
  
    
      console.log('Form data:', userDetails);
  
      this.registerForm.reset();
    } else {
      
      console.log('Invalid form data. Please check the fields.');
    }
  }
}
