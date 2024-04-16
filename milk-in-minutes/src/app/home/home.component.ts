import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../services/product.service';
import { Orders, Product } from '../product.model';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule,ReactiveFormsModule } from '@angular/forms';


@Component({
<<<<<<< HEAD
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
=======
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        MatCardModule,
        NgFor,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        
    ]
>>>>>>> 1f8d80e117225a11efc2476ee8e20fb21c648189
})
export class HomeComponent implements OnInit {
  //categories: Category[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchValue = '';
  
<<<<<<< HEAD
  
=======
  searchForm = this.fb.group({
    searchValue: ''
  });
  searchTerm: any;
>>>>>>> 1f8d80e117225a11efc2476ee8e20fb21c648189
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
      console.log("Product1--"+this.products[0]);
    });
    console.log("Product--"+this.products[0].name);
    
  }
  
  search(): void {
<<<<<<< HEAD
    if(this.searchValue!==''){
    alert("button clicked")
    this.products = this.products.filter(product =>
      product.name.toLowerCase()==this.searchValue.toLowerCase()    );
      alert(this.searchValue.toLowerCase());
      console.log(this.products);
    }
    else
    {
    this.loadProducts()
    }
=======
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    this.loadProducts();
>>>>>>> 1f8d80e117225a11efc2476ee8e20fb21c648189
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
