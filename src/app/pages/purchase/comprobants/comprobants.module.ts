import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprobantsComponent } from './comprobants.component';
import { ComprobantsContainer } from './comprobants.container';
import { PurchasePrimengModule } from '@themes/purchase/purchase.primeng.module';
import { ComprobantsRoutingModule } from './comprobants-routing.module';

@NgModule({
  declarations: [ComprobantsComponent, ComprobantsContainer],
  imports: [CommonModule, PurchasePrimengModule, ComprobantsRoutingModule],
  exports: [ComprobantsContainer],
})
export class ComprobantsModule {}
