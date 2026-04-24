import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewEmployeeComponent } from './modal-new-employee.component';
import { ModalNewEmployeeContainer } from './modal-new-employee.container';

@NgModule({
  declarations: [ModalNewEmployeeComponent, ModalNewEmployeeContainer],
  imports: [CommonModule],
  exports: [ModalNewEmployeeContainer],
})
export class ModalNewEmployeeModule {}
