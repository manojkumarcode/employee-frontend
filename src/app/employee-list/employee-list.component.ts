import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee.model";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  managerId!: number;
  selectedEmployee!: number | null;
  employees!: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  getEmployees(){
    this.employeeService.getEmployeesReportingToManager(this.managerId).subscribe(
      (employees) => {
        this.employees = employees;
        this.selectedEmployee = this.employees.length > 0 ? this.employees[0].id: null;
      },
      (error) => {
        console.error('Error fetching employees', error);
      }
    );
  }


}
