import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Bills, Message } from '../datatype/user';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  billsType:Bills[]=[];
  billDeleted=false;
  getMessage:Message={message:''};
  constructor(private signUpService:SignupService) { }

  ngOnInit(): void {
   this.getAllBillsHere();
  }
  deleteBill(id:number){
    console.log(id);
    this.signUpService.deleteBills(id).subscribe((response)=>{
      if(response){
        this.getMessage=response;
        this.billDeleted=true;
        this.getAllBillsHere()
      }
    })
  }
  getAllBillsHere(){
    this.signUpService.getAllBills().subscribe((response)=>{
      if(response){
        console.log(response);
        this.billsType=response;
      }
    })
  }

}
