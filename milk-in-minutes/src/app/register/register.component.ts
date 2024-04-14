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
import { ProductService } from '../services/product.service';
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
    RouterOutlet,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  userDetails: UserDetails[] = [];
  registerForm: FormGroup = new FormGroup({}); // No need to initialize with a new FormGroup()
  hidePassword = true; 
  router: any;
  

  constructor(private formbuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {


    const userDetails: UserDetails = this.registerForm.value;
    this.productService.register(userDetails).subscribe({
      next: () =>{
        console.log('Registered successfully');
        this.registerForm.reset();
        this.router.navigate(['/login']);
  
    },
    error: (error) => {
      console.error('Error registering:', error);
    }
    });
  } else { console.error('Form invalid. Please check your input.');}
}


  }

