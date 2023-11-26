import { Component, OnInit } from "@angular/core";
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
  constructor(private cartService:CartService) {}

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
}
