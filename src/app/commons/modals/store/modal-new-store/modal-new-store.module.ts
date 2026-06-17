import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewStoreComponent } from './modal-new-store.component';
import { ModalNewStoreContainer } from './modal-new-store.container';
import { AutomationPrimengModule } from '@themes/automation/automation.primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalNewStoreComponent, ModalNewStoreContainer],
  imports: [CommonModule, AutomationPrimengModule, ReactiveFormsModule],
  exports: [ModalNewStoreContainer],
})
export class ModalNewStoreModule {}
