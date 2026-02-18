import { NgModule } from '@angular/core';
import { ActionsButtonsModule } from './actions-buttons/actions-buttons.module';

@NgModule({
  imports: [ActionsButtonsModule],
  exports: [ActionsButtonsModule],
})
export class SharedComponentsModule {}
