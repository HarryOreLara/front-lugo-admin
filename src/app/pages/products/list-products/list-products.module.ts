import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products.component';
import { ListProductsRoutingModule } from './list-products-routing.module';
import { RouterModule } from '@angular/router';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListProductsComponent],
  imports: [
    CommonModule,
    ListProductsRoutingModule,
    RouterModule,
    ProductsPrimengModule,
    FormsModule,
  ],
})
export class ListProductsModule {}
