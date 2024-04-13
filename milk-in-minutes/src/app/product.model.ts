export interface Product {
  category: string;
    products: any;
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }

  export interface Cart {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
  export interface UserDetails{
    id: number;
    name: string;
    email: string;
    password: string;
  }
  
  export interface Orders {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }

  export interface Category {
    name: string;
  }