import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Orders } from '../product.model';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    NgFor
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders: Orders[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {

  }

  loadOrders(): void {
    this.productService.getOrders()
    .subscribe(orders => this.orders = orders);
  }
}
