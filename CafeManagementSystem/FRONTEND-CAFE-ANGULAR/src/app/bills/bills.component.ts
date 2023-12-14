import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Bills, Message } from '../datatype/user';
import { ProfileServiceService } from '../services/profile-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  billsType:Bills[]=[];
  billDeleted=false;
  getMessage:Message={message:''};
  constructor(private signUpService:SignupService,
    private profileService:ProfileServiceService,
    private router:Router) { }

  ngOnInit(): void {
   this.getAllBillsHere();
  }
  deleteBill(id:number){
    console.log(id);
    this.signUpService.deleteBills(id).subscribe((response)=>{
      if(response){
        this.getMessage=response;
        this.billDeleted=true;
        this.getAllBillsHere();
        setTimeout(()=>{
          this.billDeleted=false;
        },5000)
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
  getPdf(bill:Bills){
      this.profileService.setReportData(bill);
      this.router.navigate(['/getReports']);
  }

}
