import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalHostComponent } from './app-modal-host.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [ModalHostComponent],
  imports: [CommonModule, StyleClassModule, DialogModule],
  exports: [ModalHostComponent],
})
export class ModalHostModule {}
