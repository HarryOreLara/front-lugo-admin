import { StepPresenter } from '@states/forms/step.presenter';
import { IClientForm } from './models/client-form.model';
import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { DocumentType } from '@enums/document-type.enum';
import { Channel } from '@enums/channel.enum';
import { Status } from '@enums/status.enum';

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
    this.typeDocument = new FormControl(DocumentType.DNI, [
      Validators.required,
    ]);
    this.document = new FormControl(null, [Validators.required]);
    this.firstName = new FormControl(null, [Validators.required]);
    this.lastName = new FormControl(null);
    this.email = new FormControl('userdefault@email.com', [
      Validators.email,
      Validators.required,
    ]);
    this.phone = new FormControl('987654321');
    this.address = new FormControl('Trujillo');
    this.postalCode = new FormControl(13000);
    this.isActive = new FormControl(true);
    this.channel = new FormControl(Channel.PHYSICAL);
    this.status = new FormControl(Status.ACTIVE);

    this.document.setValidators(this.documentValidator());
    this.phone.setValidators(this.phoneValidator());
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

  public documentValidator(): ValidatorFn {
    return (control) => {
      if (!control.value) return null;

      const value = control.value.toString();
      const type = this.typeDocument?.value;

      switch (type) {
        case DocumentType.DNI:
          if (value.length !== 8) {
            return { document: true };
          }
          break;
      }

      return null;
    };
  }

  public phoneValidator(): ValidatorFn {
    return (control) => {
      if (!control.value) return null;

      const value = control.value.toString();

      const phoneRegex = /^9\d{8}$/;

      if (!phoneRegex.test(value)) {
        return {
          phoneInvalid: {
            message: 'El teléfono debe tener 9 dígitos y empezar con 9',
          },
        };
      }

      return null;
    };
  }
}
