import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { PriceSummary, cart } from '../datatype';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartData: cart[] | undefined;

  priceSummary: PriceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0,
  };
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.currentCart().subscribe((result) => {
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        if(item.quantity){
        price = price + (+item.price*item.quantity);
        }
      });
      this.priceSummary.price = price;
      this.priceSummary.discount = price / 10;
      this.priceSummary.tax = price / 20;
      this.priceSummary.delivery = 100;
      this.priceSummary.total =
        this.priceSummary.price -
        this.priceSummary.discount +
        this.priceSummary.tax +
        this.priceSummary.delivery;
      console.log(price);
      console.log(this.priceSummary.total)
    });
  }
}
