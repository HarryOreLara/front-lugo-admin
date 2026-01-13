import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputStockComponent } from './output-stock.component';
import { OutputStockRoutingModule } from './output-sotck-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OutputStockComponent
  ],
  imports: [
    CommonModule,
    OutputStockRoutingModule,
    FormsModule
  ]
})
export class OutputStockModule { }
