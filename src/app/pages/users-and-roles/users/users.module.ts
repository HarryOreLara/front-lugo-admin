import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersContainer } from './users.container';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent, UsersContainer],
  imports: [CommonModule, UsersRoutingModule],
  exports: [UsersContainer],
})
export class UsersModule {}
