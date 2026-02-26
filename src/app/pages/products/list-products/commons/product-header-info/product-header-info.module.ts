import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHeaderInfoComponent } from './product-header-info.component';
import { ProductHeaderInfoContainer } from './product-header-info.container';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { SharedPipesModule } from '@pipes/shared.pipes.module';

@NgModule({
  declarations: [ProductHeaderInfoComponent, ProductHeaderInfoContainer],
  imports: [CommonModule, ProductsPrimengModule, SharedPipesModule],
  exports: [ProductHeaderInfoContainer],
})
export class ProductHeaderInfoModule {}
