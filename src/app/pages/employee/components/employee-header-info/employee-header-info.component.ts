import { Component, Input } from '@angular/core';
import { Employee } from '@class/employee/employee.class';

@Component({
  selector: 'app-employee-header-info-ui',
  templateUrl: './employee-header-info.component.html',
  styleUrls: ['./employee-header-info.component.css']
})
export class EmployeeHeaderInfoComponent {

    @Input() public employees: Employee[] = [];
  
}
