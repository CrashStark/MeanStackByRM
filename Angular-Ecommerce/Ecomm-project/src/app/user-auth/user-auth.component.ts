import { Component, OnInit } from '@angular/core';
import { Login, Signup } from '../datatype';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  useraccountType=true;
  authError:string='';
  constructor(private serviceUser:UserService,
    private router:Router) {}

  ngOnInit(): void {
    this.serviceUser.userAuthReload();
  }
  signup(user: Signup) {
    // do not use like console.log("button clicked" +user); 
    //else it will give [object Object] error do console.log("button clicked" ,user)
    console.log(user);
    this.serviceUser.userSignup(user);
  }
  loginForm(data:Login){
    console.log(data);
    this.serviceUser.userLogin(data);
    this.serviceUser.invalidUser.subscribe((result)=>{
      console.log(result);
      if(result){
        this.authError="Please Enter valid user deitails";
      }
    })
    
  }
  useraccount(val:string){
   
    if(val==='login'){
      this.useraccountType=false;
    }else if(val==='create'){
      this.useraccountType=true;
    }
  }
}
