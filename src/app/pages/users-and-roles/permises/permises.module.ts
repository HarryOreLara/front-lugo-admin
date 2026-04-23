import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermisesComponent } from './permises.component';
import { PermisesContainer } from './permises.container';
import { PermisesRoutingModule } from './permises-routing.module';

@NgModule({
  declarations: [PermisesComponent, PermisesContainer],
  imports: [CommonModule, PermisesRoutingModule],
  exports: [PermisesContainer],
})
export class PermisesModule {}
