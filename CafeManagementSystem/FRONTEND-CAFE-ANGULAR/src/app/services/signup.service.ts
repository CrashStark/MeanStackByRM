import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Categorty, LoginUser, User } from '../datatype/user';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  baseUrl: string = '';
  login = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient) {}

  checUserLoginStatus(){
    this.login.next(true);
    console.log(this.login);
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

}
