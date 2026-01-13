import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AlertHostComponent } from './app-alert-host.component';

@NgModule({
  declarations: [AlertHostComponent],
  imports: [CommonModule, StyleClassModule],
  exports: [AlertHostComponent],
})
export class AlertHostModule {}
