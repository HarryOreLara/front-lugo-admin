import { NgModule } from '@angular/core';

import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [StyleClassModule, ButtonModule, ToastModule],
})
export class AlertPrimengModule {}
