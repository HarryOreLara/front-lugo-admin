import { Injectable } from '@angular/core';
import { StepPresenter } from '@states/forms/step.presenter';
import { IPurchaseDataClientForm } from './purchase-data-client.form';
import {
  FormBuilder,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { DocumentType } from '@enums/document-type.enum';

@Injectable({
  providedIn: 'root',
})
export class PurchaseDataClientPresenter extends StepPresenter<IPurchaseDataClientForm> {
  typeDocument: FormControl;
  document: FormControl;

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.typeDocument = new FormControl(DocumentType.DNI, [Validators.required]);
    this.document = new FormControl(null, [Validators.required]);
    this.document.setValidators(this.documentValidator());
  }

  public createForm(): void {
    this.form = this.fb.group({
      typeDocument: this.typeDocument,
      document: this.document,
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
}
