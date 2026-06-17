import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerTableComponent } from './owner-table.component';
import { OwnerTableContainer } from './owner-table.container';
import { AutomationPrimengModule } from '@themes/automation/automation.primeng.module';
import { SharedDirectiveModule } from '@directives/shared-directives.module';
import { SharedPipesModule } from '@pipes/shared.pipes.module';

@NgModule({
  declarations: [OwnerTableComponent, OwnerTableContainer],
  imports: [
    CommonModule,
    AutomationPrimengModule,
    SharedDirectiveModule,
    SharedPipesModule,
  ],
  exports: [OwnerTableContainer],
})
export class OwnerTableModule {}
