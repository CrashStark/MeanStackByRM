import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType='default';
  constructor(private router:Router) { }

  ngOnInit(): void {
    
    this.router.events.subscribe((event:any)=>{
      if(event.url){

        if(localStorage.getItem("seller")&&event.url.includes('seller')){
          console.log("In Seller Area");
          this.menuType ='seller';
        }else{
          console.log("outside Seller");
          this.menuType='default';
        }
        console.log(event.url);
      }
     
    })
  }

}
