import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table.component';
import { ProductTableContainer } from './product-table.container';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { FormsModule } from '@angular/forms';
import { SharedPipesModule } from '@pipes/shared.pipes.module';
import { SharedDirectiveModule } from '@directives/shared-directives.module';

@NgModule({
  declarations: [ProductTableComponent, ProductTableContainer],
  imports: [
    CommonModule,
    ProductsPrimengModule,
    SharedDirectiveModule,
    FormsModule,
    SharedPipesModule,
  ],
  exports: [ProductTableContainer],
})
export class ProductTableModule {}
