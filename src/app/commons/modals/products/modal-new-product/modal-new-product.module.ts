import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewProductComponent } from './modal-new-product.component';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalNewProductComponent],
  imports: [
    CommonModule,
    ProductsPrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ModalNewProductModule {}
