import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewEmployeeComponent } from './modal-new-employee.component';
import { ModalNewEmployeeContainer } from './modal-new-employee.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeePrimengModule } from '@themes/employee/employee.primeng.module';
import { SharedDirectiveModule } from '@directives/shared-directives.module';
import { SharedPipesModule } from '@pipes/shared.pipes.module';

@NgModule({
  declarations: [ModalNewEmployeeComponent, ModalNewEmployeeContainer],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeePrimengModule,
    SharedDirectiveModule,
    SharedPipesModule,
  ],
  exports: [ModalNewEmployeeContainer],
})
export class ModalNewEmployeeModule {}
