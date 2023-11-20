import { Component, OnInit } from '@angular/core';
import { Login, Product, Signup, cart } from '../datatype';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  useraccountType=true;
  authError:string='';
  constructor(private serviceUser:UserService,
    private router:Router,private productservice:ProductService) {}

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
      }else{
        this.localCartToRemoteCart();
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
  localCartToRemoteCart(){
    let data=localStorage.getItem('localCart');
    let user =localStorage.getItem('user');
    let userId=user && JSON.parse(user).id;
    if(data){
      let cartDataList:Product[]= JSON.parse(data);
      let user =localStorage.getItem('user');
      let userId=user && JSON.parse(user).id;
      cartDataList.forEach((product:Product,index) => {
        let cartData:cart={
          ...product,
          productId:product.id,
          userId
        }
        delete cartData.id;
        setTimeout(()=>{
          this.productservice.addTocart(cartData).subscribe((result)=>{
            if(result){
              console.log("item stored in db")
            }
          })
          if(cartDataList.length===index+1){
            localStorage.removeItem('localCart');
          }
        })
        
      });
    }
    setTimeout(()=>{
      this.productservice.getCartList(userId);
    },2000)
   
  }
}
