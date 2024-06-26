import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../services/product.service';
import { Orders, Product } from '../product.model';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    NgFor,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  //categories: Category[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchValue = '';
  
  
  constructor(private productService: ProductService,
    private fb: FormBuilder,
    
  ) {}
  
  ngOnInit() {
    this.loadProducts();
  }
  
  loadProducts(): void {
    this.productService.getProducts(this.searchValue)
    .subscribe((products) => {
      this.products = products;
      console.log("Product1--"+this.products[0]);
    });
    //console.log("Product--"+this.products[0].name);
    
  }
  


  search(): void {
    if (this.searchValue !== '') { 
      const searchTerm = this.searchValue.toLowerCase(); // Normalize for case-insensitive search
  
      this.products = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
      );
  
    } else {
      this.loadProducts(); // Reset to original list
    }
  }

  filterByCategory(category: string): void {
    if (category === 'All') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.category === category
      );
    }
  }


  

 
  order(orders: Orders): void {
    this.productService.orders(orders).subscribe(() => {
      console.log('order placed successfully:', orders);
      alert("order placed")
    });
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product).subscribe(() => {
      console.log('Product added to cart:', product);
      alert("Added to cart")
    });
  }
}
