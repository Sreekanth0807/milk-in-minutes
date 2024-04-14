import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../services/product.service';
import { Orders, Product } from '../product.model';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    NgFor,
    MatFormFieldModule,
    MatInputModule,
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
  
  searchForm = this.fb.group({
    searchValue: ''
  });
  constructor(private productService: ProductService,
    private fb: FormBuilder
  ) {}
  
  ngOnInit() {
    this.loadProducts();
  }
  
  loadProducts(): void {
    this.productService.getProducts(this.searchValue)
    .subscribe((products) => {
      this.products = products;

    });
  }
  
  search(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.loadProducts();
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
    });
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product).subscribe(() => {
      console.log('Product added to cart:', product);
    });
  }
}
