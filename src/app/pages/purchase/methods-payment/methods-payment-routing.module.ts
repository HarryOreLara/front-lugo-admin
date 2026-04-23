import { NgModule } from '@angular/core';
import { MethodsPaymentContainer } from './methods-payment.container';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MethodsPaymentContainer,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MethodsPaymentRoutingModule {}
