import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/cart.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ item: [] });
  constructor(private snackBar: MatSnackBar) {}

  addToCart(item: CartItem): void {
    const items = [ ...this.cart.value.item ];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ item:items });
    this.snackBar.open("1 item adde to cart", "Ok", { duration: 3000 });
   
  }
  getTotal(items:Array<CartItem>):number{
    return items.map(item=>item.price*item.quantity)
     .reduce((prev,current)=>prev+current,0);
   }
   clearCart(){
    this.cart.next({item:[]});
    this.snackBar.open('Cart is cleared','Ok',{
      duration:3000
    })
   }
}
