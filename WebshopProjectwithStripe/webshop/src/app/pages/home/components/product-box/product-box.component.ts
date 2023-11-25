import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl:'product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
@Input() fullWidthMode=false;
@Output() addToCart=new EventEmitter();
product:Product|undefined={id:1,
  tittle:'snickers',
  price:150,
  category:'shoes',
  description:'description',
  image:'https://via.placeholder.com/150'
};
  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart():void{
    this.addToCart.emit(this.product);
  }

}
