import { Component } from '@angular/core';
import { ILoginForm } from './models/login-form.model';
import { AuthFacade } from '@patterns//facade/auth.facade';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
})
export class LoginContainer {
  public isLoading$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly authFacade: AuthFacade) {
    this.isLoading$ = authFacade.loading$;
  }

  public login(loginForm: ILoginForm) {
    this.authFacade.loginFacade(loginForm);
  }
}
