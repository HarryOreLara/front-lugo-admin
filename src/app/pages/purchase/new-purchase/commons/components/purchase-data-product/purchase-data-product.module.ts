import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseDataProductComponent } from './purchase-data-product.component';
import { PurchaseDataProductContainer } from './purchase-data-product.container';
import { PurchasePrimengModule } from '@themes/purchase/purchase.primeng.module';

@NgModule({
  declarations: [PurchaseDataProductComponent, PurchaseDataProductContainer],
  imports: [CommonModule, PurchasePrimengModule],
  exports: [PurchaseDataProductContainer],
})
export class PurchaseDataProductModule {}
