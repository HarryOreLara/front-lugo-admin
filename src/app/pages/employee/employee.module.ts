import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeContainer } from './employee.container';
import { EmployeeHeaderInfoModule } from "./components/employee-header-info/employee-header-info.module";
import { EmployeeTableListModule } from "./components/employee-table-list/employee-table-list.module";

@NgModule({
  declarations: [EmployeeComponent, EmployeeContainer],
  imports: [CommonModule, EmployeeRoutingModule, EmployeeHeaderInfoModule, EmployeeTableListModule],
  exports: [EmployeeContainer],
})
export class EmployeeModule {}
