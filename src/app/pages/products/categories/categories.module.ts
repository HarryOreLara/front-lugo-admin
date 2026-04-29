import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { FormsModule } from '@angular/forms';
import { ProductTableModule } from "../list-products/commons/product-table/product-table.module";
import { CategoryTableModule } from './commons/components/category-table/category-table.module';
import { CategoryHeaderInfoModule } from "./commons/components/category-header-info/category-header-info.module";

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ProductsPrimengModule,
    FormsModule,
    ProductTableModule,
    CategoryTableModule,
    CategoryHeaderInfoModule
],
})
export class CategoriesModule {}
