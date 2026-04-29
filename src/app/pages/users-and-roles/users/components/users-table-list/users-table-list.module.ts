import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableListComponent } from './users-table-list.component';
import { UsersTableListContainer } from './users-table-list.container';
import { UserPrimengModule } from '@themes/users/user.primeng.module';

@NgModule({
  declarations: [UsersTableListComponent, UsersTableListContainer],
  imports: [CommonModule, UserPrimengModule],
  exports: [UsersTableListContainer],
})
export class UsersTableListModule {}
