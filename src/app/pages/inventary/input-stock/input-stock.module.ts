import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputStockComponent } from './input-stock.component';
import { InputStockRoutingModule } from './input-stock-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputStockComponent
  ],
  imports: [
    CommonModule,
    InputStockRoutingModule,
    FormsModule
  ]
})
export class InputStockModule { }
