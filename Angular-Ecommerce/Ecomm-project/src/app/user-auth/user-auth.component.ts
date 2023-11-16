import { Component, OnInit } from '@angular/core';
import { Signup } from '../datatype';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  constructor(private serviceUser:UserService,
    private router:Router) {}

  ngOnInit(): void {
    this.serviceUser.userAuthReload();
  }
  signup(user: Signup) {
    // do not use like console.log("button clicked" +user); 
    //else it will give object do console.log("button clicked" ,user)
    console.log(user);
    this.serviceUser.userSignup(user);
  }
}
