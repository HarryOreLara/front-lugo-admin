import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CardModule,
    ButtonModule,
    InputTextareaModule,
    InputNumberModule,
    TagModule,
    ToastModule,
    StyleClassModule,
    TableModule,
    ButtonModule,
    OverlayPanelModule,
    TagModule,
    InputTextModule,
  ],
  exports: [
    CardModule,
    ButtonModule,
    InputTextareaModule,
    InputNumberModule,
    TagModule,
    ToastModule,
    StyleClassModule,
    TableModule,
    ButtonModule,
    TagModule,
    OverlayPanelModule,
    InputTextModule,
  ],
})
export class AutomationPrimengModule {}
