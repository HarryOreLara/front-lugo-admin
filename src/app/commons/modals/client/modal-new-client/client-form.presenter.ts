import { StepPresenter } from '@states/forms/step.presenter';
import { IClientForm } from './models/client-form.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ClientFormPresenter extends StepPresenter<IClientForm> {
  typeDocument: FormControl;
  document: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phone: FormControl;
  address: FormControl;
  postalCode: FormControl;
  isActive: FormControl;
  channel: FormControl;
  status: FormControl;

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.typeDocument = new FormControl(null);
    this.document = new FormControl(null);
    this.firstName = new FormControl(null);
    this.lastName = new FormControl(null);
    this.email = new FormControl(null);
    this.phone = new FormControl(null);
    this.address = new FormControl(null);
    this.postalCode = new FormControl(null);
    this.isActive = new FormControl(null);
    this.channel = new FormControl(null);
    this.status = new FormControl(null);
  }

  public createForm(): void {
    this.initForm();
  
    this.form = this.fb.group({
      typeDocument: this.typeDocument,
      document: this.document,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      postalCode: this.postalCode,
      isActive: this.isActive,
      channel: this.channel,
      status: this.status,
    });
  }
}
