import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodsPaymentComponent } from './methods-payment.component';
import { MethodsPaymentContainer } from './methods-payment.container';
import { PurchasePrimengModule } from '@themes/purchase/purchase.primeng.module';
import { MethodsPaymentRoutingModule } from './methods-payment-routing.module';

@NgModule({
  declarations: [MethodsPaymentComponent, MethodsPaymentContainer],
  imports: [CommonModule, PurchasePrimengModule, MethodsPaymentRoutingModule],
  exports: [MethodsPaymentContainer],
})
export class MethodsPaymentModule {}
