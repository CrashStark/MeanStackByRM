import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { User } from '../datatype/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  @ViewChild('signUpForm') myForm: NgForm | undefined;

  constructor(private userSignupService:SignupService) { }

  ngOnInit(): void {
  }
  onSubmit(user:User){
   
   this.userSignupService.registerUser(user).subscribe((response)=>{
    if(response){
      console.log(response);
      this.myForm?.reset();
    } 
   })
  }
}
