import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTableListComponent } from './employee-table-list.component';
import { EmployeeTableListContainer } from './employee-table-list.container';
import { EmployeePrimengModule } from '@themes/employee/employee.primeng.module';

@NgModule({
  declarations: [EmployeeTableListComponent, EmployeeTableListContainer],
  imports: [CommonModule, EmployeePrimengModule],
  exports: [EmployeeTableListContainer],
})
export class EmployeeTableListModule {}
