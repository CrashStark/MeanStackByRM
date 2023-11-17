import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';

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
          items = items.filter((item: Product) =>  id===item.id.toString());
          console.log(items.length);
          if (items.length>=0) {
            this.removeCart = true;
          } else {
            this.removeCart = false;
          }
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
      }
    }
  }
  removeTocart(id: number | undefined) {}
}
