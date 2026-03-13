import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewClientComponent } from './modal-new-client.component';
import { ModalNewClientContainer } from './modal-new-client.container';
import { ClientPrimengModule } from '@themes/client/client.primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedDirectiveModule } from '@directives/shared-directives.module';

@NgModule({
  declarations: [ModalNewClientComponent, ModalNewClientContainer],
  imports: [
    CommonModule,
    ClientPrimengModule,
    ReactiveFormsModule,
    SharedDirectiveModule,
  ],
  exports: [ModalNewClientContainer],
})
export class ModalNewClientModule {}
