import { Component, NgModule } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee();
  
  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.goToEmployeeList();
      },
      error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
