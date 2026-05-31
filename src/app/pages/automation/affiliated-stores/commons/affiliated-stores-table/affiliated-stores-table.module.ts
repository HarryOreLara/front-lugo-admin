import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliatedStoresTableContainer } from './affiliated-stores-table.container';
import { AffiliatedStoresTableComponent } from './affiliated-stores-table.component';
import { AutomationPrimengModule } from '@themes/automation/automation.primeng.module';
import { SharedDirectiveModule } from '@directives/shared-directives.module';
import { SharedPipesModule } from '@pipes/shared.pipes.module';

@NgModule({
  declarations: [
    AffiliatedStoresTableContainer,
    AffiliatedStoresTableComponent,
  ],
  imports: [
    CommonModule,
    AutomationPrimengModule,
    SharedDirectiveModule,
    SharedPipesModule,
  ],
  exports: [AffiliatedStoresTableContainer],
})
export class AffiliatedStoresTableModule {}
