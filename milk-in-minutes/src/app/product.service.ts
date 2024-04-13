import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Product } from './product.model';
import { Orders } from './product.model';
import { UserDetails } from './product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  filterProductsByName(products: Product[], searchTerm: string): Product[] {
    throw new Error('Method not implemented.');
  }

  private productUrl = 'http://localhost:3000/products'; // Assuming data.json is in the assets folder
  private cartUrl = 'http://localhost:3000/cart';
  private registerUrl = 'http://localhost:3000/registerDetails';
  private ordersUrl = 'http://localhost:3000/orders';


  constructor(private http: HttpClient) { }

  // getProducts(searchValue: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productUrl);
  // }

  getProducts(searchValue?: string): Observable<Product[]> {
    const url = searchValue ? `${this.productUrl}?search=${searchValue}` : this.productUrl;
    return this.http.get<Product[]>(url);
  }

  addToCart(product: Product): Observable<any> {
    return this.http.post<any>(this.cartUrl, product);
  }

  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(this.cartUrl);
  }

  cart: any[] = []; 
 
  register(userDetails: UserDetails): Observable<any> {
    return this.http.post<any>(this.registerUrl, userDetails);
  }
  orders(orders: Orders): Observable<any> {
    return this.http.post<any>(this.ordersUrl, orders);
  }
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.ordersUrl);
  }

  filterProducts(searchTerm: string): Observable<any[]> {
    return this.getProducts().pipe(
      map(products => products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );
  }

}
