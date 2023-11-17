import { SafeCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType = 'default';
  sellerName: string = '';
  searchResult: undefined | Product[];
  userName: string = '';
  cartItems=0;
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        if (localStorage.getItem('seller') && event.url.includes('seller')) {
          console.log('In Seller Area');
          this.menuType = 'seller';
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        } else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'user';
        } else if (localStorage.getItem('userLogin')) {
          let userStore = localStorage.getItem('userLogin');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'userLogin';
        } else {
          console.log('outside Seller');
          this.menuType = 'default';
         
        }
       
      }
    });
    let cartData=localStorage.getItem("localCart");
   
    if(cartData){
      this.cartItems=JSON.parse(cartData).length;
    }
    this.productService.cartData.subscribe((items)=>{
      this.cartItems=items.length;
    })
  }
  logout(val: string) {
    console.log(typeof val);
    console.log(typeof localStorage.getItem(val));
    if (localStorage.getItem(val) == 'seller') {
      localStorage.removeItem(val);
      this.router.navigate(['/']);
      history.pushState(null, '');
    } else if (localStorage.getItem(val) === 'user') {
      localStorage.removeItem(val);
      console.log('LogOut clicked');
      this.router.navigate(['/user-auth']);
      history.pushState(null, '');
    } else  {
      localStorage.removeItem(val);
      console.log('LogOut clicked');
      this.router.navigate(['/user-auth']);
      history.pushState(null, '');
    }
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;

      this.productService.searchProduct(element.value).subscribe((result) => {
        if (result.length > 5) {
          result.length = 5;
        }
        this.searchResult = result;
      });
    }
  }
  hideSearch() {
    this.searchResult = undefined;
  }
  submitSearch(query: string) {
    this.router.navigate([`search/${query}`]);
    console.warn(query);
  }
  redirectToDetails(id: number) {
    this.router.navigate([`details/${id}`]);
  }
}
