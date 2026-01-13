import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { BrandRoutingModule } from './brand-routing.module';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';



@NgModule({
  declarations: [
    BrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    ProductsPrimengModule
  ]
})
export class BrandModule { }
