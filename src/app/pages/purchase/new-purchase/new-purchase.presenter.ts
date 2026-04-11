import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  IPurchaseForm,
  IPurchaseItemForm,
} from './commons/interfaces/purchase-form.interface';
import { StepPresenter } from '@states/forms/step.presenter';
import { Injectable } from '@angular/core';
import { CartItem } from './commons/interfaces/car-tem.interface';
import { CurrencyType } from '@enums/currency.enum';
import { MethodPaymentType } from '@enums/method-payment.enum';
import { InvoiceType } from '@enums/invoice-type.enum';

@Injectable({ providedIn: 'root' })
export class PurchaseFormPresenter extends StepPresenter<IPurchaseForm> {
  subTotal: FormControl;
  tax: FormControl;
  total: FormControl;
  items: FormArray;
  invoiceType: FormControl;
  methodPayment: FormControl;
  currency: FormControl;
  voucher: FormControl;

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.subTotal = new FormControl(null, [Validators.required]);
    this.tax = new FormControl(null);
    this.total = new FormControl(null, [Validators.required]);
    this.items = this.fb.array([]);
    this.invoiceType = new FormControl(InvoiceType.BOLETA, [
      Validators.required,
    ]);
    this.methodPayment = new FormControl(MethodPaymentType.EFECTIVO, [
      Validators.required,
    ]);
    this.currency = new FormControl(CurrencyType.SOLES, [Validators.required]);
    this.voucher = new FormControl(null);
    this.voucher.disable();
  }

  public createForm(): void {
    this.form = this.fb.group({
      subTotal: this.subTotal,
      tax: this.tax,
      total: this.total,
      items: this.items,
      invoiceType: this.invoiceType,
      methodPayment: this.methodPayment,
      currency: this.currency,
      voucher: this.voucher,
    });

    this.changeMethodPayment();
  }

  public buildItemGroup(cartItem: CartItem): FormGroup {
    return this.fb.group({
      product: [cartItem.id],
      quantity: [cartItem.quantity],
      unitPrice: [cartItem.unitPrice],
      salePrice: [cartItem.quantity * cartItem.unitPrice],
    });
  }

  public setItems(cartItems: CartItem[]): void {
    this.items.clear();
    cartItems.forEach((item) => {
      this.items.push(this.buildItemGroup(item));
    });
  }

  public recalculateTotals(): void {
    const subtotal = (this.items.value as IPurchaseItemForm[]).reduce(
      (acc, item) => acc + item.salePrice,
      0,
    );
    this.subTotal.setValue(subtotal, { emitEvent: false });
    this.total.setValue(subtotal, { emitEvent: false });
  }

  public changeMethodPayment() {
    this.methodPayment.valueChanges.subscribe((res) => {
      switch (res) {
        case MethodPaymentType.EFECTIVO:
          this.voucher.disable();
          this.voucher.reset();
          break;
        default:
          this.voucher.enable();
          this.voucher.setValidators([Validators.required]);
          break;
      }

      this.voucher.updateValueAndValidity();
    });
  }
}
