import { Component, Input } from '@angular/core';
import { Employee } from '@class/employee/employee.class';

@Component({
  selector: 'app-employee-header-info',
  templateUrl: './employee-header-info.container.html',
})
export class EmployeeHeaderInfoContainer {
  @Input() public employees: Employee[] = [];
}
