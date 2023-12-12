import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  title = 'FRONTEND-CAFE-ANGULAR';
  constructor(private userService: SignupService){}

  ngOnInit(): void {
 
  }
}
