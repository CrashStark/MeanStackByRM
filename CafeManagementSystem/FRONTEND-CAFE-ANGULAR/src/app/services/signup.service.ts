import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bills, Categorty, LoginUser, Product, User } from '../datatype/user';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  baseUrl: string = '';
  login = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient) {}

  checUserLoginStatus(){
    this.login.next(true);
    
  }

  registerUser(user: User): Observable<any> {
    this.baseUrl = 'http://localhost:8080/user/signUp';
    return this.httpClient.post(this.baseUrl, user);
  }
  loginUser(loginUser: LoginUser):Observable<any> {
    this.baseUrl = 'http://localhost:8080/user/login';
    return this.httpClient.post(this.baseUrl,loginUser);
  }
  getCategory():Observable<Categorty[]>{
    this.baseUrl='http://localhost:8080/category/get';
    return this.httpClient.get<Categorty[]>(this.baseUrl);
  }

  getProducts():Observable<Product[]>{
    this.baseUrl='http://localhost:8080/product/get';
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  getAllBills():Observable<Bills[]>{
    this.baseUrl="http://localhost:8080/bill/getBills";
    return this.httpClient.get<Bills[]>(this.baseUrl);
  }
}
