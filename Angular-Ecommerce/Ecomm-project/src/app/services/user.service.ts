import { Injectable } from '@angular/core';
import { Signup } from '../datatype';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = '';
  constructor(private httpClient: HttpClient, private router:Router) {}

  userSignup(user: Signup) {
    this.baseUrl = 'http://localhost:3000/users';
    return this.httpClient.post(this.baseUrl, user,{observe:'response'})
    .subscribe((result)=>{
      if(result){
        localStorage.setItem('user', JSON.stringify(result.body));
        if(localStorage.getItem("user"))
        {
          this.router.navigate(['/']);
        }
      }
    });
  }
  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }
}
