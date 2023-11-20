import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product, cart } from '../datatype';

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
      this.cartData.emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
  }
  removeItemFromCart(productId: number | undefined) {
    let cartdata = localStorage.getItem('localCart');
    if (cartdata) {
      let items: Product[] = JSON.parse(cartdata);
      items = items.filter((item: Product) => {
        productId !== item.id;
      });
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }

  addTocart(cart: cart) {
    return this.httpClient.post('http://localhost:3000/cart', cart);
  }
  getCartList(userId: number) {
    return this.httpClient
      .get<Product[]>('http://localhost:3000/cart?userId=' + userId, {
        observe: 'response',
      })
      .subscribe((result) => {
        if(result && result.body)
       this.cartData.emit(result.body);
      });
  }
}
