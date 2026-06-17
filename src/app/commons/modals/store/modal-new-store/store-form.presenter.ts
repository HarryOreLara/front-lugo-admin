import { Injectable } from '@angular/core';
import { StepPresenter } from '@states/forms/step.presenter';
import { IStoreForm } from './model/store-form.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class StoreFormPresenter extends StepPresenter<IStoreForm> {
  name: FormControl;
  description: FormControl;
  code: FormControl;
  status: FormControl;
  isActive: FormControl;
  phone: FormControl;
  email: FormControl;
  address: FormControl;
  imageUrl: FormControl;

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.name = new FormControl(null, [Validators.required]);
    this.description = new FormControl(null, [Validators.required]);
    this.code = new FormControl(null, [Validators.required]);
    this.status = new FormControl(null, [Validators.required]);
    this.isActive = new FormControl(null, [Validators.required]);
    this.phone = new FormControl(null, [Validators.required]);
    this.email = new FormControl(null, [Validators.required]);
    this.address = new FormControl(null, [Validators.required]);
    this.imageUrl = new FormControl(null, [Validators.required]);
  }

  public createForm(): void {
    this.form = this.fb.group({
      name: this.name,
      description: this.description,
      code: this.code,
      status: this.status,
      isActive: this.isActive,
      phone: this.phone,
      email: this.email,
      address: this.address,
      imageUrl: this.imageUrl,
    });
  }
}
