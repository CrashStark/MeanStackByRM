import { SafeCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType='default';
  sellerName:string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
    
    this.router.events.subscribe((event:any)=>{
      if(event.url){

        if(localStorage.getItem("seller")&&event.url.includes('seller')){
          console.log("In Seller Area");
          this.menuType ='seller';
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller');
            let sellerData=sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName=sellerData.name;
          }
        }else{
          console.log("outside Seller");
          this.menuType='default';
          console.log(this.menuType);
        }
        console.log(event.url);
      }
     
    })
  }
logout(){
  localStorage.removeItem('seller');
  this.router.navigate(['/']);
  history.pushState(null,'');
}

}
