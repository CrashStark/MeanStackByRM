import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../datatype';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = '';
  cartData = new EventEmitter<Product[] | []>();
  constructor(private httpClient: HttpClient) {}

  addProduct(data: Product) {
    console.log('Service called');
    this.baseUrl = 'http://localhost:3000/products';
    return this.httpClient.post(this.baseUrl, data);
  }

  productList() {
    this.baseUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  deleteProduct(id: number) {
    this.baseUrl = `http://localhost:3000/products/${id}`;
    return this.httpClient.delete(this.baseUrl);
  }

  getProduct(id: string) {
    this.baseUrl = `http://localhost:3000/products/${id}`;
    return this.httpClient.get<Product>(this.baseUrl);
  }
  updateProduct(product: Product) {
    this.baseUrl = `http://localhost:3000/products/${product.id}`;
    console.log(product);
    return this.httpClient.put<Product>(this.baseUrl, product);
  }

  popularProducts() {
    this.baseUrl = 'http://localhost:3000/products?_limit=4';
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  trendingProducts() {
    this.baseUrl = 'http://localhost:3000/products?_limit=8';
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
  searchProduct(query: string) {
    this.baseUrl = `http://localhost:3000/products?q=${query}`;
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  localAddToCart(data: Product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
  }
}
