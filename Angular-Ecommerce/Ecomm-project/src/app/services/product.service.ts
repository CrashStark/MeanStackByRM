import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../datatype';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = '';
  constructor(private httpClient: HttpClient) {}

  addProduct(data: Product) {
    console.log('Service called');
    this.baseUrl = 'http://localhost:3000/products';
    return this.httpClient.post(this.baseUrl, data);
  }

  productList(){
    this.baseUrl='http://localhost:3000/products';
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
}
