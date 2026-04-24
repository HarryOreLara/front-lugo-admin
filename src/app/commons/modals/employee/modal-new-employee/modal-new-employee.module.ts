import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewEmployeeComponent } from './modal-new-employee.component';
import { ModalNewEmployeeContainer } from './modal-new-employee.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeePrimengModule } from '@themes/employee/employee.primeng.module';

@NgModule({
  declarations: [ModalNewEmployeeComponent, ModalNewEmployeeContainer],
  imports: [CommonModule, ReactiveFormsModule, EmployeePrimengModule],
  exports: [ModalNewEmployeeContainer],
})
export class ModalNewEmployeeModule {}
