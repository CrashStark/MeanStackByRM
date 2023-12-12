import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Product } from '../datatype/user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:Product[]=[];
  constructor(private productSignServ:SignupService) { }

  ngOnInit(): void {
   this.loadProductFromApi();
  }

  loadProductFromApi(){
    this.productSignServ.getProducts().subscribe((response)=>{
      if(response){
        this.product=response;
        console.log(response[0].categoryname);
        console.log(this.product[0].categoryname);
      }
    })
  }
}
