import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersHeaderInfoComponent } from './users-header-info.component';
import { UsersHeaderInfoContainer } from './users-header-info.container';
import { UserPrimengModule } from '@themes/users/user.primeng.module';

@NgModule({
  declarations: [UsersHeaderInfoComponent, UsersHeaderInfoContainer],
  imports: [CommonModule, UserPrimengModule],
  exports: [UsersHeaderInfoContainer],
})
export class UsersHeaderInfoModule {}
