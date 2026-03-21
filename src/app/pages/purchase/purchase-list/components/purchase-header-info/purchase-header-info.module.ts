import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseHeaderInfoComponent } from './purchase-header-info.component';
import { PurchasePrimengModule } from '@themes/purchase/purchase.primeng.module';
import { PurchaseHeaderInfoContainer } from './purchase-header-info.container';

@NgModule({
  declarations: [PurchaseHeaderInfoComponent, PurchaseHeaderInfoContainer],
  imports: [CommonModule, PurchasePrimengModule],
  exports: [PurchaseHeaderInfoContainer],
})
export class PurchaseHeaderInfoModule {}
