import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categorty } from '../datatype/user';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:Categorty[]=[];
  constructor(private signupServices:SignupService) { }

  ngOnInit(): void {
    this.signupServices.getCategory().subscribe((response)=>{
      if(response){
        this.category=response;
        console.log(response);
      }
    })
  }

}
