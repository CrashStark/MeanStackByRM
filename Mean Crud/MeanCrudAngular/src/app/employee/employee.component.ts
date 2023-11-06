import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]

})
export class EmployeeComponent implements OnInit {

selectedEmployee= new Employee();

 
  constructor(private empservice: EmployeeService) { }

  ngOnInit(): void {
    console.log(this.selectedEmployee.id);
  }
  onsubmit(formData:NgForm) {
    
    this.empservice.postRequest(formData.value).subscribe((respose)=>{
      console.log(JSON.stringify(respose));
    
    });
  }

}
