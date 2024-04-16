import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Orders } from '../product.model';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    NgFor,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders: Orders[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders(): void {
    this.productService.getOrders()
      .subscribe(orders => this.orders = orders);
  }
}
