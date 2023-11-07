import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employees:Employee[]=[];
readonly url:string="http://localhost:3000/employees/"
selectEmployees?:Employee;
 

  constructor(private httpclient:HttpClient) { }

  postRequest(data:Employee): Observable<any>{
     return this.httpclient.post(this.url, data);
  }

  getEmployees():Observable<any>{
    return this.httpclient.get(this.url);
  }

  updateEmployees(emp :Employee){
    return this.httpclient.put(this.url +`${emp.id}`, emp);
  }
  onDelete(emp:Employee):Observable<any>{
    return this.httpclient.delete(this.url+`${emp.id}`);
  }
}
