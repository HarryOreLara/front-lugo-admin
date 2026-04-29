import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandTableListComponent } from './brand-table-list.component';
import { BrandTableListContainer } from './brand-table-list.container';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';

@NgModule({
  declarations: [BrandTableListComponent, BrandTableListContainer],
  imports: [CommonModule, ProductsPrimengModule],
  exports: [BrandTableListContainer],
})
export class BrandTableListModule {}
