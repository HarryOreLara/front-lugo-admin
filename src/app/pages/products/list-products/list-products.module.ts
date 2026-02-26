import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products.component';
import { ListProductsRoutingModule } from './list-products-routing.module';
import { RouterModule } from '@angular/router';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { FormsModule } from '@angular/forms';
import { ProductTableModule } from './commons/product-table/product-table.module';
import { ProductHeaderInfoModule } from './commons/product-header-info/product-header-info.module';

@NgModule({
  declarations: [ListProductsComponent],
  imports: [
    CommonModule,
    ListProductsRoutingModule,
    RouterModule,
    ProductsPrimengModule,
    FormsModule,
    ProductTableModule,
    ProductHeaderInfoModule
  ],
})
export class ListProductsModule {}
