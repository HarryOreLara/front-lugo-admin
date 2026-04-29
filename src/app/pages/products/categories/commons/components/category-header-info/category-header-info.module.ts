import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryHeaderInfoComponent } from './category-header-info.component';
import { CategoryHeaderInfoContainer } from './category-header-info.container';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';

@NgModule({
  declarations: [CategoryHeaderInfoComponent, CategoryHeaderInfoContainer],
  imports: [CommonModule, ProductsPrimengModule],
  exports: [CategoryHeaderInfoContainer],
})
export class CategoryHeaderInfoModule {}
