import { Injectable } from '@angular/core';
import { StepPresenter } from '@states/forms/step.presenter';
import { ILoginForm } from './models/login-form.model';
import { FormBuilder, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginPresenter extends StepPresenter<ILoginForm> {
  username: FormControl;
  password: FormControl;

  constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.username = new FormControl(null, []);
    this.password = new FormControl(null, []);
  }

  public createForm(): void {
    this.form = this.fb.group({
      username: this.username,
      password: this.password,
    });
  }
}
