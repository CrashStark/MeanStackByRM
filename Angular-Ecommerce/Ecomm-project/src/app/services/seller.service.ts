import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Signup } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);
  baseUrl = '';
  constructor(private httpClient: HttpClient, private router: Router) {}
  userSignup(data: Signup) {
    this.baseUrl = 'http://localhost:3000/seller';
    let result = this.httpClient
      .post(this.baseUrl, data, {
        observe: 'response',
      })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(loginData: Login) {
    console.log(loginData);
    let email = loginData.email;
    let password = loginData.password;
    this.baseUrl = `http://localhost:3000/seller?email=${email}&password=${password}`;
    return this.httpClient
      .get(this.baseUrl, { observe: 'response' })
      .subscribe((result: any) => {
        console.log(result);
        if (result && result.body && result.body.length) {
          console.log('User Logged In');
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
        }else{
          console.log("User Login Failed");
          this.isLoginError.emit(true);
        }
      });
  }
}
