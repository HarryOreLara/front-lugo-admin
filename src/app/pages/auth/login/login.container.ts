import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginForm } from './models/login-form.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
})
export class LoginContainer {
  constructor(private readonly router: Router) {}

  public login(loginForm: ILoginForm) {

    console.log({loginForm});
    // this.router.navigateByUrl('/dashboard');
  }
}
