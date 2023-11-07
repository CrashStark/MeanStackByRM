import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]

})
export class EmployeeComponent implements OnInit {

  selectedEmployee = new Employee();
  employees: Employee[] = [];


  constructor(private empservice: EmployeeService) { }

  ngOnInit(): void {
    console.log(this.selectedEmployee.id);
    this.getEmployee();
  }
  onsubmit(formData: NgForm) {
    
    this.empservice.postRequest(formData.value).subscribe((respose) => {
      console.log(JSON.stringify(respose));

    });
  }

  getEmployee(){
    this.empservice.getEmployees().subscribe((response)=>{
      this.employees=response;
    })
  }

  onEdit(emp:Employee){
    this.selectedEmployee=emp;
    
  }

  onDelete(emp:Employee){
    if(confirm("Are you sure you want to delete")===true){
      this.empservice.onDelete(emp).subscribe((response)=>{
        alert("Employee has been deleted");
        this.getEmployee();
      })
    }
  
  }

}
