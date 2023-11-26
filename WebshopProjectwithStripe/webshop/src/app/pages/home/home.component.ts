import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";
const ROW_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit,OnDestroy {
  cols = 3;
  category: string | undefined;
  rowHeight = ROW_HEIGHT[this.cols];
  product:Array<Product>|undefined;
  sort='desc';
  count=12;
  productsSubscription:Subscription|undefined;
  constructor(private cartService: CartService,private storeService:StoreService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.productsSubscription =this.storeService.getAllProducts(this.count.toString(),this.sort,this.category).subscribe((products)=>{
      this.product=products;
    })
  }
  onColumnsCountChange(colsNumber: number) {
    this.cols = colsNumber;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }
  onShowcategory(newCategory: string) {
    this.category = newCategory;
    this.getProducts();
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.tittle,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
  ngOnDestroy(): void {
      if(this.productsSubscription){
        this.productsSubscription.unsubscribe();
      }
  }
  onItemsCountChange(newcount:number):void{
    this.count=newcount;
    this.getProducts();

  }
  onSortChange(sort:string):void{
    this.sort=sort;
    this.getProducts();
  }
}
