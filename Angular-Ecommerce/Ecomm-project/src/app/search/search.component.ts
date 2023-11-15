import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: undefined | Product[];
  noResult=true;
  resultData="";

  constructor(
    private activatedRouter: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let query = this.activatedRouter.snapshot.paramMap.get('query');
   //this will tell typescript that this value will not be null
    query=query!;
    console.log(typeof query);
    this.resultData=query;
    if (query) {
      
      this.productService.searchProduct(query).subscribe((result) => {
        this.searchResult = result;
        if(result.length ===0){
          this.noResult=false;
        }
        console.log(this.searchResult);
      });
    }
  }
}
