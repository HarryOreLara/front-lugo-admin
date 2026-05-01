import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarySummaryComponent } from './inventary-summary.component';
import { InventarySummaryContainer } from './inventary-summary.container';
import { InventaryPrimengModule } from '@themes/inventary/inventary.primeng.module';
import { SharedPipesModule } from '@pipes/shared.pipes.module';

@NgModule({
  declarations: [InventarySummaryComponent, InventarySummaryContainer],
  imports: [CommonModule, InventaryPrimengModule, SharedPipesModule],
  exports: [InventarySummaryContainer],
})
export class InventarySummaryModule {}
