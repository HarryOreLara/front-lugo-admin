import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { RolesContainer } from './roles.container';
import { RolesRoutingModule } from './roles-routing.module';

@NgModule({
  declarations: [RolesComponent, RolesContainer],
  imports: [CommonModule, RolesRoutingModule],
  exports: [RolesContainer],
})
export class RolesModule {}
