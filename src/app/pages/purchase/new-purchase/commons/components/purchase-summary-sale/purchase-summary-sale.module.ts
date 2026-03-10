import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseSummarySaleComponent } from './purchase-summary-sale.component';
import { PurchaseSummarySaleContainer } from './purchase-summary-sale.container';
import { PurchasePrimengModule } from '@themes/purchase/purchase.primeng.module';

@NgModule({
  declarations: [PurchaseSummarySaleComponent, PurchaseSummarySaleContainer],
  imports: [CommonModule, PurchasePrimengModule],
  exports: [PurchaseSummarySaleContainer],
})
export class PurchaseSummarySaleModule {}
