import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, order } from '../datatype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: number | undefined;
  cartData:cart[]|undefined;
  orderMessage:string='';
  constructor(private productService: ProductService,private router:Router) {}

  ngOnInit(): void {
    this.productService.currentCart().subscribe((result) => {
      let price = 0;
      this.cartData=result;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + +item.price * item.quantity;
        }
      });
      this.totalPrice = price + price / 10 + 100 - price / 10;
      console.log(this.totalPrice);
    });
  }
  submitOrder(value:{email: string, address: string, contact: string}) {
    let user=localStorage.getItem('user');
    let userId=user && JSON.parse(user).id;
    if(this.totalPrice){
      let orderData:order={
        ...value,
       totalPrice:this.totalPrice,
       userId,
       id:undefined
      }
      this.cartData?.forEach((item)=>{
        setTimeout(() => {
          this.productService.deleteCartItems(item.id);
        }, 600);
      })
      this.productService.orderNow(orderData).subscribe((result)=>{
        if(result){
          this.orderMessage="Your Order Has Been Placed";
          setTimeout(() => {
            this.orderMessage='';
            this.router.navigate(['my-orders'])
          }, 3000);
         
        }
      })
    }
   
  }
}
