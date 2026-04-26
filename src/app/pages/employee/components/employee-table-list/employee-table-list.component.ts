import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '@class/employee/employee.class';

@Component({
  selector: 'app-employee-table-list-ui',
  templateUrl: './employee-table-list.component.html',
  styleUrls: ['./employee-table-list.component.css'],
})
export class EmployeeTableListComponent {
  @Input() public isLoading: boolean;
  @Input() public employees: Employee[] = [];

  @Output() public newEmployeeEmit: EventEmitter<void> =
    new EventEmitter<void>();

  newEmployee() {
    this.newEmployeeEmit.emit();
  }

  updateEmployee() {}

  deleteEmployee() {}
}
