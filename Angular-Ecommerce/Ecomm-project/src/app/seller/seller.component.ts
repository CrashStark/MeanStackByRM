import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../datatype';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent implements OnInit {
  constructor(private sellerServices: SellerService, private router: Router) {}

  ngOnInit():void{
    this.sellerServices.reloadSeller();
  }
  signup(form: Signup) {
    this.sellerServices.userSignup(form);
  }
}
