import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
productData:undefined|Product;
updateProductMessage:undefined|string;
  constructor(private route:ActivatedRoute,private productService:ProductService,private navRouter:Router) { }

  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id');
    console.log(productId);
    if(productId){
    this.productService.getProduct(productId).subscribe((result)=>{
      this.productData=result;
      console.log(result);
    });
    }

  }
  submit(data:Product){
    if(this.productData){
      data.id=this.productData.id;
    }
    this.productService.updateProduct(data).subscribe((result)=>{
      if(result){
        this.updateProductMessage="Product Updated Successfully";
      }
    })
    setTimeout(() => {
      this.updateProductMessage=undefined;
      this.navRouter.navigate(['/seller-home']);
    }, 3000);
   console.log(data)
  }
}
