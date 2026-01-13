import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthPrimengModule } from '@themes/auth/auth.primeng.module';
import { LoginRoutingModule } from './login-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthPrimengModule,
    LoginRoutingModule,
    RouterModule
  ]
})
export class LoginModule { }
