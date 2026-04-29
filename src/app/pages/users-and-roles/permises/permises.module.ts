import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermisesComponent } from './permises.component';
import { PermisesContainer } from './permises.container';
import { PermisesRoutingModule } from './permises-routing.module';
import { AuthPrimengModule } from '@themes/auth/auth.primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PermisesComponent, PermisesContainer],
  imports: [CommonModule, PermisesRoutingModule, AuthPrimengModule, FormsModule, ReactiveFormsModule],
  exports: [PermisesContainer],
})
export class PermisesModule {}
