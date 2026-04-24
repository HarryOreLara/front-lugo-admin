import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeHeaderInfoComponent } from './employee-header-info.component';
import { EmployeeHeaderInfoContainer } from './employee-header-info.container';
import { EmployeePrimengModule } from '@themes/employee/employee.primeng.module';

@NgModule({
  declarations: [EmployeeHeaderInfoComponent, EmployeeHeaderInfoContainer],
  imports: [CommonModule, EmployeePrimengModule],
  exports: [EmployeeHeaderInfoContainer],
})
export class EmployeeHeaderInfoModule {}
