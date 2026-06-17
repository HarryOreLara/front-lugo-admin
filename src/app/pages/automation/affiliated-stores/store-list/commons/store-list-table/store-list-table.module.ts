import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListTableContainer } from './store-list-table.container';
import { StoreListTableComponent } from './store-list-table.component';
import { AutomationPrimengModule } from '@themes/automation/automation.primeng.module';
import { SharedDirectiveModule } from '@directives/shared-directives.module';
import { SharedPipesModule } from '@pipes/shared.pipes.module';

@NgModule({
  declarations: [StoreListTableContainer, StoreListTableComponent],
  imports: [
    CommonModule,
    AutomationPrimengModule,
    SharedDirectiveModule,
    SharedPipesModule,
  ],
  exports: [StoreListTableContainer],
})
export class StoreListTableModule {}
