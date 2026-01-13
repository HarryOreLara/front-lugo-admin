import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentStockComponent } from './current-stock.component';
import { CurrentStockRoutingModule } from './current-stock-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CurrentStockComponent],
  imports: [CommonModule, CurrentStockRoutingModule, FormsModule],
})
export class CurrentStockModule {}
