import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { order } from '../datatype';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
orderData:order[]|undefined;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.orderList().subscribe((result)=>{
      if(result){
        this.orderData=result;
      }
    })
  }

}
