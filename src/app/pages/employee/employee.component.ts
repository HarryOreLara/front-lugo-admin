import { Component, Input } from '@angular/core';
import { Employee } from '@class/employee/employee.class';

@Component({
  selector: 'app-employee-ui',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  @Input() public employees: Employee[] = [];
}
