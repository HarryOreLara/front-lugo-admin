import { Component, EventEmitter, Output } from '@angular/core';
import { LoginPresenter } from './login.presenter';
import { ILoginForm } from './models/login-form.model';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Output() public loginEmmiter: EventEmitter<ILoginForm> =
    new EventEmitter<ILoginForm>();
  constructor(public loginPresenter: LoginPresenter) {
    this.createControls();
  }

  public login() {
    this.loginEmmiter.emit(this.loginPresenter.Form.getRawValue());
  }

  private createControls() {
    this.loginPresenter.initForm();
    this.loginPresenter.createForm();
  }
}
