import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewOwnerComponent } from './modal-new-owner.component';
import { ModalNewOwnerContainer } from './modal-new-owner.container';
import { AutomationPrimengModule } from '@themes/automation/automation.primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedDirectiveModule } from '@directives/shared-directives.module';
import { SharedPipesModule } from '@pipes/shared.pipes.module';

@NgModule({
  declarations: [ModalNewOwnerComponent, ModalNewOwnerContainer],
  imports: [
    CommonModule,
    AutomationPrimengModule,
    ReactiveFormsModule,
    SharedDirectiveModule,
    SharedPipesModule,
  ],
  exports: [ModalNewOwnerContainer],
})
export class ModalNewOwnerModule {}
