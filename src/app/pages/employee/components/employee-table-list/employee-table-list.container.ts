import { Component, Input } from '@angular/core';
import { Employee } from '@class/employee/employee.class';

@Component({
  selector: 'app-employee-table-list',
  templateUrl: './employee-table-list.container.html',
})
export class EmployeeTableListContainer {
    @Input() public employees: Employee[] = [];
  
}
