import { Component, Input, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  private _cart: Cart = { item: [] };
  itemQuantity = 0;
  @Input() get cart(): Cart {
    return this._cart =this.cart;
  }

  set cart(cart: Cart) {
    this.cart = cart;
    this.itemQuantity = cart.item.map((item) => item.quantity)
    .reduce((prev,current)=>prev+current,0);
  }
  constructor(private cartService:CartService) {}
  getTotal(items:CartItem[]):number{
   return this.cartService.getTotal(items);
  }
  onClearCart(){
    this.cartService.clearCart()
  }
}
