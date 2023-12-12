import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login = new BehaviorSubject<boolean>(false);
  constructor(private userService:SignupService) { }

  ngOnInit(): void {
    this.login=this.userService.login;


  }

}
