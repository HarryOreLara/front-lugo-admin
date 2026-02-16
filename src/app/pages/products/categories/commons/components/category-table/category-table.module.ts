import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTableComponent } from './category-table.component';
import { CategoryTableContainer } from './category-table.container';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoryTableComponent, CategoryTableContainer],
  imports: [CommonModule, ProductsPrimengModule, FormsModule],
  exports: [CategoryTableContainer],
})
export class CategoryTableModule {}
