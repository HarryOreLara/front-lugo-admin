import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPurchaseComponent } from './new-purchase.component';
import { NewPurchaseRoutingModule } from './new-purchase-routing.module';
import { NewPurchaseContainer } from './new-purchase.container';
import { PurchasePrimengModule } from '@themes/purchase/purchase.primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchaseDataClientModule } from './commons/components/purchase-data-client/purchase-data-client.module';
import { PurchaseDataProductModule } from './commons/components/purchase-data-product/purchase-data-product.module';
import { PurchaseSummarySaleModule } from './commons/components/purchase-summary-sale/purchase-summary-sale.module';

@NgModule({
  declarations: [NewPurchaseComponent, NewPurchaseContainer],
  imports: [
    CommonModule,
    NewPurchaseRoutingModule,
    PurchasePrimengModule,
    FormsModule,
    ReactiveFormsModule,
    PurchaseDataClientModule,
    PurchaseDataProductModule,
    PurchaseSummarySaleModule,
  ],
  exports: [NewPurchaseContainer],
})
export class NewPurchaseModule {}
