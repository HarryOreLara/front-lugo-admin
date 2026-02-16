import { Type } from '@angular/core';
import { AlertErrorComponent } from 'src/app/commons/alerts/alert-error/alert-error.component';
import { AlertSuccessComponent } from 'src/app/commons/alerts/alert-success/alert-success.component';


export const ALERT_REGISTRY: Record<string, Type<object>> = {
  alertSuccess: AlertSuccessComponent,
  alertError: AlertErrorComponent
};
