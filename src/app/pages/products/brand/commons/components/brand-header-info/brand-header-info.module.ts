import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandHeaderInfoComponent } from './brand-header-info.component';
import { BrandHeaderInfoContainer } from './brand-header-info.container';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';

@NgModule({
  declarations: [BrandHeaderInfoComponent, BrandHeaderInfoContainer],
  imports: [CommonModule, ProductsPrimengModule],
  exports: [BrandHeaderInfoContainer],
})
export class BrandHeaderInfoModule {}
