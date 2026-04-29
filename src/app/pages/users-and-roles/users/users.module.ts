import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersContainer } from './users.container';
import { UsersRoutingModule } from './users-routing.module';
import { UsersHeaderInfoModule } from "./components/users-header-info/users-header-info.module";
import { UsersTableListModule } from "./components/users-table-list/users-table-list.module";

@NgModule({
  declarations: [UsersComponent, UsersContainer],
  imports: [CommonModule, UsersRoutingModule, UsersHeaderInfoModule, UsersTableListModule],
  exports: [UsersContainer],
})
export class UsersModule {}
