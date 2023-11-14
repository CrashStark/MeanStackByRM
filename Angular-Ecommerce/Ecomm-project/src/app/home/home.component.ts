import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProduct:undefined|Product[];
  trendingProducts:undefined|Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.popularProducts().subscribe((data)=>{
      console.log(data);
      this.popularProduct=data;
    });

    this.productService.trendingProducts().subscribe((result)=>{
      this.trendingProducts=result;
    })

  }

}
