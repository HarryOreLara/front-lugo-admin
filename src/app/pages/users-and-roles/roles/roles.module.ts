import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { RolesContainer } from './roles.container';
import { RolesRoutingModule } from './roles-routing.module';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [RolesComponent, RolesContainer],
  imports: [CommonModule, RolesRoutingModule, FormsModule],
  exports: [RolesContainer],
})
export class RolesModule {}
