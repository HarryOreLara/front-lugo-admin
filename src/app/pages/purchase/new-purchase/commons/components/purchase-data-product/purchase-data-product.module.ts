import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseDataProductComponent } from './purchase-data-product.component';
import { PurchaseDataProductContainer } from './purchase-data-product.container';
import { PurchasePrimengModule } from '@themes/purchase/purchase.primeng.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PurchaseDataProductComponent, PurchaseDataProductContainer],
  imports: [CommonModule, PurchasePrimengModule, FormsModule, ReactiveFormsModule],
  exports: [PurchaseDataProductContainer],
})
export class PurchaseDataProductModule {}
