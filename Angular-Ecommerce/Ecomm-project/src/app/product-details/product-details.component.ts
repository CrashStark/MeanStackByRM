import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
detailsProduct:undefined|Product;
productQuantity=1;
  constructor(private activatedRouter:ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
   let id= this.activatedRouter.snapshot.paramMap.get('id');
   id=id!;
    this.productService.getProduct(id).subscribe((result)=>{
      if(result){
        this.detailsProduct=result;
        console.log(this.detailsProduct.color);
      }
    })
  }
  handleQuantity(val:string){
    if(val==='min' && this.productQuantity>0){
      this.productQuantity--;
    }else if(val==='add' && this.productQuantity<20){
      this.productQuantity++;
    }
  }

}
