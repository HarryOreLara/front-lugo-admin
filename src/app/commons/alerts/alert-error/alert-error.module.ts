import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertErrorComponent } from './alert-error.component';
import { AlertPrimengModule } from '@themes/alert/alert.primeng.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AlertErrorComponent],
  imports: [CommonModule, AlertPrimengModule],
  exports: [AlertErrorComponent],
  providers: [MessageService],
})
export class AlertErrorModule {}
