import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTableComponent } from './category-table.component';
import { CategoryTableContainer } from './category-table.container';
import { ProductsPrimengModule } from '@themes/products/products.primeng.module';
import { FormsModule } from '@angular/forms';
import { SharedPipesModule } from '@pipes/shared.pipes.module';
import { SharedDirectiveModule } from '@directives/shared-directives.module';
import { SharedComponentsModule } from 'src/app/commons/components/shared-components.module';

@NgModule({
  declarations: [CategoryTableComponent, CategoryTableContainer],
  imports: [
    CommonModule,
    ProductsPrimengModule,
    FormsModule,
    SharedPipesModule,
    SharedDirectiveModule,
    SharedComponentsModule
  ],
  exports: [CategoryTableContainer],
})
export class CategoryTableModule {}
