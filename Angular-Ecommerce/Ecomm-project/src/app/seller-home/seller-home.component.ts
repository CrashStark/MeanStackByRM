import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined|Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.productList().subscribe((result)=>{
      console.warn(result);
      this.productList=result;
    })
  }

}
