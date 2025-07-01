import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id: number;
  
  constructor(private employeeService: EmployeeService,
    private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.employeeService.getEmployeeById(this.id).subscribe(
          data => {
            this.employee = data;
        },
          error => console.log(error));
    }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      data => {
        this.goToEmployeeList();
      },
      error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
