import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Bills } from '../datatype/user';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  billsType:Bills[]=[];
  constructor(private signUpService:SignupService) { }

  ngOnInit(): void {
    this.signUpService.getAllBills().subscribe((response)=>{
      if(response){
        console.log(response);
        this.billsType=response;
      }
    })
  }

}
