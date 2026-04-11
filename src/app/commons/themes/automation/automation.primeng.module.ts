import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CardModule,
    ButtonModule,
    InputTextareaModule,
    InputNumberModule,
    TagModule,
    ToastModule,
  ],
  exports: [
    CardModule,
    ButtonModule,
    InputTextareaModule,
    InputNumberModule,
    TagModule,
    ToastModule,
  ],
})
export class AutomationPrimengModule {}
