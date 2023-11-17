import { EventEmitter, Injectable } from '@angular/core';
import { Login, Signup } from '../datatype';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = '';
  invalidUser = new EventEmitter<boolean>(false);
  constructor(private httpClient: HttpClient, private router: Router) {}

  userSignup(user: Signup) {
    this.baseUrl = 'http://localhost:3000/users';
    return this.httpClient
      .post(this.baseUrl, user, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          if (localStorage.getItem('user')) {
            this.router.navigate(['/']);
          }
        }
      });
  }
  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/']);
    } else if (localStorage.getItem('userLogin')) {
      this.router.navigate(['/']);
    }
  }

  userLogin(data: Login) {
    this.baseUrl = `http://localhost:3000/users?email=${data.email}&password=${data.password}`;
    this.httpClient
      .get<Signup[]>(this.baseUrl, { observe: 'response' })
      .subscribe((result) => {
        if (result && result.body?.length) {
          console.log(result.body);
          this.invalidUser.emit(false);
          localStorage.setItem('userLogin', JSON.stringify(result.body[0]));
          this.router.navigate(['/']);
        } else {
          this.invalidUser.emit(true);
        }
      });
  }
}
