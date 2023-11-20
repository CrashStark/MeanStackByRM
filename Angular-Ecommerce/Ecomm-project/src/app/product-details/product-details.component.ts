import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product, cart } from '../datatype';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  detailsProduct: undefined | Product;
  productQuantity = 1;
  removeCart = false;
  constructor(
    private activatedRouter: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    id = id!;
    this.productService.getProduct(id).subscribe((result) => {
      if (result) {
        this.detailsProduct = result;
        let cartData = localStorage.getItem('localCart');
        if (id && cartData) {
          let items = JSON.parse(cartData);
          items = items.filter((item: Product) => id === item.id.toString());
          console.log(items.length);
          if (items.length >= 0) {
            this.removeCart = true;
          } else {
            this.removeCart = false;
          }
        }
        let user = localStorage.getItem('user');

        if (user) {
          let userId = user && JSON.parse(user).id;
          this.productService.getCartList(userId);
          this.productService.cartData.subscribe((result) => {
            let items = result.filter(
              (item: Product) => id?.toString() === item.id?.toString()
            );
            if(items.length){
              this.removeCart=true;
            }
          });
        }
      }
    });
  }
  handleQuantity(val: string) {
    if (val === 'min' && this.productQuantity > 0) {
      this.productQuantity--;
    } else if (val === 'add' && this.productQuantity < 20) {
      this.productQuantity++;
    }
  }
  addtocart() {
    if (this.detailsProduct) {
      this.detailsProduct.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        console.log(this.detailsProduct);
        this.productService.localAddToCart(this.detailsProduct);
        this.removeCart = true;
      } else {
        console.log('user is logged');
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id;
        console.log(userId);
        let cartData: cart = {
          ...this.detailsProduct,
          userId,
          productId: this.detailsProduct.id,
        };
        delete cartData.id;
        console.warn(cartData);
        this.productService.addTocart(cartData).subscribe((result) => {
          console.warn(result);
          if (result) {
            this.productService.getCartList(userId);
            console.log('Product is added');
            this.removeCart = true;
          }
        });
      }
    }
  }
  removeTocart(id: number | undefined) {
    this.productService.removeItemFromCart(id);
    this.removeCart = false;
  }
}
