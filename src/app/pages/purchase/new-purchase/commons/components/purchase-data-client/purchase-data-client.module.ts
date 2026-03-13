import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseDataClientComponent } from './purchase-data-client.component';
import { PurchaseDataClientContainer } from './purchase-data-client.container';
import { PurchasePrimengModule } from '@themes/purchase/purchase.primeng.module';
import { SharedDirectiveModule } from '@directives/shared-directives.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PurchaseDataClientComponent, PurchaseDataClientContainer],
  imports: [
    CommonModule,
    PurchasePrimengModule,
    SharedDirectiveModule,
    ReactiveFormsModule,
  ],
  exports: [PurchaseDataClientContainer],
})
export class PurchaseDataClientModule {}
