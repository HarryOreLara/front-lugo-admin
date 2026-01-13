import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ProductsPrimengModule,
    FormsModule,
  ],
})
export class CategoriesModule {}
