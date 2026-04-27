import { Component } from '@angular/core';
import { ILoginForm } from './models/login-form.model';
import { AuthFacade } from '@patterns//facade/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
})
export class LoginContainer {
  constructor(private readonly authFacade: AuthFacade) {}

  public login(loginForm: ILoginForm) {
    this.authFacade.loginFacade(loginForm);
  }
}
