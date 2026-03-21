import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseTableListComponent } from './purchase-table-list.component';
import { PurchaseTableListContainer } from './purchase-table-list.container';
import { PurchasePrimengModule } from '@themes/purchase/purchase.primeng.module';

@NgModule({
  declarations: [PurchaseTableListComponent, PurchaseTableListContainer],
  imports: [CommonModule, PurchasePrimengModule],
  exports: [PurchaseTableListContainer],
})
export class PurchaseTableListModule {}
