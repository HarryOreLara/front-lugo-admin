import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewProductComponent } from './modal-new-product.component';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalNewProductContainer } from './modal-new-product.container';

@NgModule({
  declarations: [ModalNewProductComponent, ModalNewProductContainer],
  imports: [
    CommonModule,
    ProductsPrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ModalNewProductContainer],
})
export class ModalNewProductModule {}
