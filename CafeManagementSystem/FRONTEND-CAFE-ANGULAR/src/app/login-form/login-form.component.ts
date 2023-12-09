import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { LoginUser } from '../datatype/user';
import { TokenServiceService } from '../services/token-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @ViewChild('ngInput') ngInput: NgForm | undefined;
  constructor(
    private userServices: SignupService,
    private tokenService: TokenServiceService,
    private router: Router
  ) {}
  token: string = '';
  ngOnInit(): void {}
  onlogin(userLogin: LoginUser) {
    console.log(userLogin);
    this.userServices.loginUser(userLogin).subscribe((response) => {
      console.log(response.token);
      this.token = response.token;
      if (response) {
        this.tokenService.setToken(this.token);
        this.router.navigate(['category']);
      }
    });
    this.ngInput?.reset();
  }
}
