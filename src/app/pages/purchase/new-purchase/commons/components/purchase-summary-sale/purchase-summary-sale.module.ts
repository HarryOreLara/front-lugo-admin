import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseSummarySaleComponent } from './purchase-summary-sale.component';
import { PurchaseSummarySaleContainer } from './purchase-summary-sale.container';
import { PurchasePrimengModule } from '@themes/purchase/purchase.primeng.module';
import { SharedPipesModule } from '@pipes/shared.pipes.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PurchaseSummarySaleComponent, PurchaseSummarySaleContainer],
  imports: [
    CommonModule,
    PurchasePrimengModule,
    SharedPipesModule,
    ReactiveFormsModule,
  ],
  exports: [PurchaseSummarySaleContainer],
})
export class PurchaseSummarySaleModule {}
