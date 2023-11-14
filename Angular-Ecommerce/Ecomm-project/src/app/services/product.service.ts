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

  deleteProduct(id:number){
    this.baseUrl=`http://localhost:3000/products/${id}`
     return this.httpClient.delete(this.baseUrl);
  }

  getProduct(id:string){
    this.baseUrl=`http://localhost:3000/products/${id}`;
    return this.httpClient.get<Product>(this.baseUrl);
  }
  updateProduct(product:Product){
    this.baseUrl = `http://localhost:3000/products/${product.id}`;
    console.log(product);
    return this.httpClient.put<Product>(this.baseUrl,product);
  }

  popularProducts(){
    this.baseUrl='http://localhost:3000/products?_limit=4';
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
}
