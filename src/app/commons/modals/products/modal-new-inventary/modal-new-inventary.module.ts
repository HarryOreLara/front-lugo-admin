import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewInventaryComponent } from './modal-new-inventary.component';
import { ModalNewInventaryContainer } from './modal-new-inventary.container';
import { InventaryPrimengModule } from '@themes/inventary/inventary.primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalNewInventaryComponent, ModalNewInventaryContainer],
  imports: [
    CommonModule,
    InventaryPrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ModalNewInventaryContainer],
})
export class ModalNewInventaryModule {}
