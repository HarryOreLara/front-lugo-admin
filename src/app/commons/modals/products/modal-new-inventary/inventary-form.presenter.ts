import { StepPresenter } from '@states/forms/step.presenter';
import { IInventaryForm } from './models/inventary.model';
import { FormBuilder, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { InventaryMovementType } from '@enums/inventary-movement.enum';

@Injectable({
  providedIn: 'root',
})
export class InventaryFormPresenter extends StepPresenter<IInventaryForm> {
  product: FormControl;
  typeInventary: FormControl;
  quantity: FormControl;
  reference: FormControl;
  reason: FormControl;
  unitCost: FormControl;
  totalCost: FormControl;

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public createForm() {
    this.initForm();

    this.form = this.fb.group({
      product: this.product,
      typeInventary: this.typeInventary,
      quantity: this.quantity,
      reference: this.reference,
      reason: this.reason,
      unitCost: this.unitCost,
      totalCost: this.totalCost,
    });
  }

  public initForm(): void {
    this.product = new FormControl(null);
    this.typeInventary = new FormControl(InventaryMovementType.INBOUND);
    this.quantity = new FormControl(null);
    this.reference = new FormControl(null);
    this.reason = new FormControl(null);
    this.unitCost = new FormControl(null);
    this.totalCost = new FormControl(null);
  }
}
