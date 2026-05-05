import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewBrandComponent } from './modal-new-brand.component';
import { ModalNewBrandContainer } from './modal-new-brand.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';

@NgModule({
  declarations: [ModalNewBrandComponent, ModalNewBrandContainer],
  imports: [
    CommonModule,
    ProductsPrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ModalNewBrandContainer],
})
export class ModalNewBrandModule {}
