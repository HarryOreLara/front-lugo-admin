import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { BrandRoutingModule } from './brand-routing.module';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { BrandContainer } from './brand.container';
import { BrandHeaderInfoModule } from "./commons/components/brand-header-info/brand-header-info.module";
import { BrandTableListModule } from "./commons/components/brand-table-list/brand-table-list.module";

@NgModule({
  declarations: [BrandComponent, BrandContainer],
  imports: [CommonModule, BrandRoutingModule, ProductsPrimengModule, BrandHeaderInfoModule, BrandTableListModule],
  exports: [BrandContainer],
})
export class BrandModule {}
