import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewCategoryComponent } from './modal-new-category.component';
import { ModalNewCategoryContainer } from './modal-new-category.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { SharedDirectiveModule } from '@directives/shared-directives.module';

@NgModule({
  declarations: [ModalNewCategoryComponent, ModalNewCategoryContainer],
  imports: [
    CommonModule,
    ProductsPrimengModule,
    SharedDirectiveModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ModalNewCategoryContainer],
})
export class ModalNewCategoryModule {}
