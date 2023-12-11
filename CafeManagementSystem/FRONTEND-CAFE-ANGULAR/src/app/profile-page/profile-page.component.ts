import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
@ViewChild('edupForm' , { static: false }) edupForm : NgForm|undefined;
  constructor() { }
Disabled: boolean = true;
formData:{
  name: '',
  contact: '',
  email: '',
  password:'',
  newPassword:''
} | any;
  ngOnInit(): void {
    this.Disabled=true;
  }

  onEditUpadate(form:any){
    console.log("Update click");
    console.log(form);
  }
  onEditClick(){
    console.log("Edit Clicked");
    this.Disabled= false;
  }

}
