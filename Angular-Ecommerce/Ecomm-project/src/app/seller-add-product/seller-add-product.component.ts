import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
addProductMessage:string|undefined;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  addProductValue(data:Product,form:NgForm){
    this.productService.addProduct(data).subscribe((response)=>{
      console.log(response);
      form.reset();
      if(response){
        this.addProductMessage="Product is successfully added";
      }
      setTimeout(()=>{
        this.addProductMessage='';
        
      },3000);
    });
    console.log(data);
  }
}
