import { StepPresenter } from '@states/forms/step.presenter';
import { IEmployeeForm } from './models/employee-form.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFormPresenter extends StepPresenter<IEmployeeForm> {
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phone: FormControl;
  role: FormControl;
  isActive: FormControl;
  typeDocument: FormControl;
  document: FormControl;
  address: FormControl;
  postalCode: FormControl;
  status: FormControl;
  district: FormControl;
  bank: FormControl;

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.firstName = new FormControl(null, []);
    this.lastName = new FormControl(null, []);
    this.email = new FormControl(null, []);
    this.phone = new FormControl(null, []);
    this.role = new FormControl(null, []);
    this.isActive = new FormControl(null, []);
    this.typeDocument = new FormControl(null, []);
    this.document = new FormControl(null, []);
    this.address = new FormControl(null, []);
    this.postalCode = new FormControl(null, []);
    this.status = new FormControl(null, []);
    this.district = new FormControl(null, []);
    this.bank = new FormControl(null, []);
  }

  public createForm(): void {

    this.form = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      role: this.role,
      isActive: this.isActive,
      typeDocument: this.typeDocument,
      document: this.document,
      address: this.address,
      postalCode: this.postalCode,
      status: this.status,
      district: this.district,
      bank: this.bank,
    });
  }
}
