import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseListComponent } from './purchase-list.component';
import { PurchaseListContainer } from './purchase-list.container';
import { PurchaseListRoutingModule } from './purchase-list-routing.module';
import { PurchaseTableListModule } from './components/purchase-table-list/purchase-table-list.module';
import { PurchaseHeaderInfoModule } from './components/purchase-header-info/purchase-header-info.module';

@NgModule({
  declarations: [PurchaseListComponent, PurchaseListContainer],
  imports: [
    CommonModule,
    PurchaseListRoutingModule,
    PurchaseTableListModule,
    PurchaseHeaderInfoModule,
  ],
  exports: [PurchaseListContainer],
})
export class PurchaseListModule {}
