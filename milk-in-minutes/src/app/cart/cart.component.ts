import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Cart, Orders, Product } from '../product.model';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatCardModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {


  cartItems: Cart[] = [];
  orders: Orders[] = [];


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.productService.getCartItems()
    .subscribe(cartItems => this.cartItems = cartItems);
  }
  remove(productId: string | number) {
    alert("Do you want to remove")
    this.cartItems = this.cartItems.filter(item => item.id !== productId);

}
order(orders: Orders): void {
  this.productService.orders(orders).subscribe(() => {
    console.log('order placed successfully:', orders);
    alert("order placed")
  });
  
}
}
