import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthPrimengModule } from '@themes/auth/auth.primeng.module';
import { LoginRoutingModule } from './login-routing.module';
import { RouterModule } from '@angular/router';
import { SharedDirectiveModule } from '@directives/shared-directives.module';
import { LoginContainer } from './login.container';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, LoginContainer],
  imports: [
    CommonModule,
    AuthPrimengModule,
    LoginRoutingModule,
    RouterModule,
    SharedDirectiveModule,
    ReactiveFormsModule
  ],
  exports: [LoginContainer],
})
export class LoginModule {}
