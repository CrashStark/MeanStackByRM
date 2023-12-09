import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../datatype/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl:string='';
  constructor(private httpClient :HttpClient) { }

  registerUser(user:User):Observable<any>{
    
    this.baseUrl = "http://localhost:8080/user/signUp";
    return this.httpClient.post(this.baseUrl,user);
  }
}
