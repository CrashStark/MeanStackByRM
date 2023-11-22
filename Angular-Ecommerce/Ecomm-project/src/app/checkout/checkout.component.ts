import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { order } from '../datatype';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: number | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.currentCart().subscribe((result) => {
      let price = 0;
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
       userId
      }
      this.productService.orderNow(orderData).subscribe((result)=>{
        if(result){
          alert('Order Placed');
        }
      })
    }
   
  }
}
