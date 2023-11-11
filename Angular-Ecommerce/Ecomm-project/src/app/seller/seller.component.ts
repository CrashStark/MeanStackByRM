import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, Signup } from '../datatype';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent implements OnInit {
  constructor(private sellerServices: SellerService, private router: Router) {}
  showLogin=false;
  authError='';
  ngOnInit():void{
    this.sellerServices.reloadSeller();
  }
  signup(form: Signup) {
    this.sellerServices.userSignup(form);
  }
  login(data:Login){
    this.authError='';
    this.sellerServices.userLogin(data);
    console.log(data);
    this.sellerServices.isLoginError.subscribe((err)=>{
      if(err){
        this.authError="Email or Password is not correct";
      }
    })
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignup(){
    this.showLogin=false;
  }
}
