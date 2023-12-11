import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileServiceService } from '../services/profile-service.service';
import { Profile } from '../datatype/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  @ViewChild('edupForm', { static: false }) edupForm: NgForm | undefined;
  constructor(private profileService: ProfileServiceService) {}
  Disabled: boolean = true;
  userProfile?: Profile;
  formData:
    | {
        name: '';
        contact: '';
        email: '';
        password: '';
        newPassword: '';
      }
    | any;
  ngOnInit(): void {
    this.Disabled = true;
    this.profileService
      .getUserProfile('admin@gmail.com')
      .subscribe((response) => {
        console.log(response);
        this.userProfile = response;
      });
  }

  onEditUpadate(form: any) {
    if (this.edupForm) {
      console.log('Update click');
      console.log(form);
    }
  }
  onEditClick() {
    console.log('Edit Clicked');
    this.Disabled = false;
  }
}
