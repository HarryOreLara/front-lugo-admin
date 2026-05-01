import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewInventaryComponent } from './modal-new-inventary.component';
import { ModalNewInventaryContainer } from './modal-new-inventary.container';
import { InventaryPrimengModule } from '@themes/inventary/inventary.primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventaryDetailModule } from './commons/inventary-detail/inventary-detail.module';
import { InventarySummaryModule } from './commons/inventary-summary/inventary-summary.module';

@NgModule({
  declarations: [ModalNewInventaryComponent, ModalNewInventaryContainer],
  imports: [
    CommonModule,
    InventaryPrimengModule,
    FormsModule,
    ReactiveFormsModule,
    InventaryDetailModule,
    InventarySummaryModule
  ],
  exports: [ModalNewInventaryContainer],
})
export class ModalNewInventaryModule {}
