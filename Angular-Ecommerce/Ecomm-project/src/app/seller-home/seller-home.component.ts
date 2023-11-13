import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | Product[];
  constructor(private productService: ProductService) {}
  productMessage: undefined | string;
  ngOnInit(): void {
    this.productListFunction();
  }

  deleteProduct(id: number) {
    console.log('test Id' + id);
    this.productService.deleteProduct(id).subscribe((response) => {
      console.log(response);
      this.productMessage = `Product is deleted with ${id}`;
      this.productListFunction();
    });

    setTimeout(() => {
      this.productMessage = '';
    }, 3000);
  }
  productListFunction() {
    this.productService.productList().subscribe((result) => {
      console.warn(result);
      this.productList = result;
    });
  }
}
