import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../datatype/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileServiceService {
  baseURL: string = '';
  constructor(private httpClient: HttpClient) {}

  getUserProfile(email:string):Observable<Profile>{
    this.baseURL = 'http://localhost:8080/user/getProfile';
    return this.httpClient.post<Profile>(this.baseURL,email);
  }

  updateUserProfile(){
    this.baseURL = 'http://localhost:8080/user/getProfile';
  }
}
