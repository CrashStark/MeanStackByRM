import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { loadStripe } from "@stripe/stripe-js";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    item: [
      {
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 100,
        quantity: 1,
        id: 2,
      }
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  constructor(private cartService:CartService, private httpClient:HttpClient) {}

  ngOnInit(): void {
    this.dataSource = this.cart.item;
    this.cartService.cart.subscribe((cart:Cart)=>{
      this.cart=cart;
      this.dataSource=this.cart.item;

    })
  }
  getTotal(items:Array<CartItem>):number{
   return this.cartService.getTotal(items);
  }
  onClearCart(){
    this.cartService.clearCart();
  }
  onRemoveFromCart(item:CartItem) : void{
    this.cartService.removeFromCart(item);
  }
  onAddQuantity(itme:CartItem):void{
    this.cartService.addToCart(itme);
  }
  onRemoveQuantity(item:CartItem):void{
    this.cartService.removeQuantity(item);
  }
  onCheckout():void{
this.httpClient.post('http://localhost:4242/checkout',{
  item:this.cart.item
}).subscribe(async(res:any)=>{
  let stripe=await loadStripe('pk_test_51OGhXWSAVSb7cqpE8vJZRqnkWNY962JIklAEqVXaK3GmdE9v6Q7nFflO9w8c8m6blaUQA0HKTepwZNrTYGCkiL6C00E5vcqgf2');
  stripe?.redirectToCheckout({
    sessionId:res.id
  })
})

  }
}
