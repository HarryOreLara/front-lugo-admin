import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StepPresenter } from '@states/forms/step.presenter';
import { IProductForm } from './modals/product-form.modal';
import { Product } from '@class/index';
import { Subscription } from 'rxjs';
import {
  noWhitespaceValidator,
  onlyLettersValidator,
  onlyNumbersValidator,
} from 'src/app/commons/validators';

@Injectable({
  providedIn: 'root',
})
export class ProductsFormPresenter extends StepPresenter<IProductForm> {
  name: FormControl;
  category: FormControl;
  brand: FormControl;
  color: FormControl;
  description: FormControl;
  stock: FormControl;
  sku: FormControl;
  barCode: FormControl;
  descriptionFull: FormControl;
  prices: FormControl;
  status: FormControl;
  isActive: FormControl;

  ///Cntroladores
  useSamePrice: FormControl;

  private firstPriceSub?: Subscription;

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.name = new FormControl(null, [
      Validators.required,
      noWhitespaceValidator(),
    ]);
    this.description = new FormControl(null, [
      noWhitespaceValidator(),
      Validators.maxLength(200),
      Validators.minLength(5),
    ]);
    this.descriptionFull = new FormControl(null, [
      Validators.maxLength(500),
      Validators.minLength(5),
    ]);
    this.category = new FormControl(null);
    this.brand = new FormControl(null);
    this.color = new FormControl(null);
    this.stock = new FormControl(null);
    this.sku = new FormControl(null);
    this.barCode = new FormControl(null, [
      onlyNumbersValidator(),
      Validators.maxLength(30),
      Validators.minLength(5),
      noWhitespaceValidator(),
    ]);
    this.prices = new FormControl(null);
    this.status = new FormControl(null);
    this.isActive = new FormControl(null);

    this.useSamePrice = new FormControl(null);
  }
  public createForm(): void {
    this.form = this.fb.group({
      name: this.name,
      category: this.category,
      brand: this.brand,
      color: this.color,
      description: this.description,
      descriptionFull: this.descriptionFull,
      stock: this.stock,
      sku: this.sku,
      barCode: this.barCode,
      prices: this.fb.array(
        this.getDefaultPrices().map((price) => this.createPriceGroup(price)),
      ),
      status: this.status,
      isActive: this.isActive,
      useSamePrice: [false],
    });

    this.listenUseSamePrice();
  }

  private getDefaultPrices() {
    return [{ channel: 'WEB' }, { channel: 'PHYSICAL' }, { channel: 'MOBILE' }];
  }

  private createPriceGroup(price?: any): FormGroup {
    return this.fb.group({
      channel: [price?.channel ?? null],
      costPrice: [price?.costPrice ?? null],
      salePrice: [price?.salePrice ?? null],
      taxRate: [price?.taxRate ?? null],
      validFrom: [price?.validFrom ?? null],
      validTo: [price?.validTo ?? null],
    });
  }

  get pricesArray(): FormArray {
    return this.form.get('prices') as FormArray;
  }

  public createValidators() {
    this.name = new FormControl(null, [Validators.required]);
    this.description = new FormControl(null, [Validators.required]);
    this.descriptionFull = new FormControl(null);
    this.category = new FormControl(null);
    this.color = new FormControl(null);
    this.brand = new FormControl(null);
    this.stock = new FormControl(null);
    this.isActive = new FormControl(null);
    this.useSamePrice = new FormControl(null);
    this.status = new FormControl(null);
    this.prices = new FormControl(null);
    this.sku = new FormControl(null);
    this.barCode = new FormControl(null);
  }

  public updateForm(product: Product) {
    this.form.patchValue({
      ...product,
      category: product.category.id,
      brand: product.brand.id,
      color: product.color.id,
    });
  }

  private listenUseSamePrice() {
    const useSamePriceControl = this.form.get('useSamePrice');

    useSamePriceControl?.valueChanges.subscribe((useSame: boolean) => {
      if (useSame) {
        this.enableOnlyFirstPrice();
        this.listenFirstPriceChanges();
      } else {
        this.enableAllPrices();
      }
    });
  }
  private listenFirstPriceChanges() {
    if (this.firstPriceSub) {
      this.firstPriceSub.unsubscribe();
    }

    const firstGroup = this.pricesArray.at(0);

    this.firstPriceSub = firstGroup.valueChanges.subscribe((value) => {
      this.pricesArray.controls.forEach((group, index) => {
        if (index > 0) {
          group.patchValue(
            {
              costPrice: value.costPrice,
              salePrice: value.salePrice,
              taxRate: value.taxRate,
            },
            { emitEvent: false },
          );
        }
      });
    });
  }
  private enableOnlyFirstPrice() {
    this.pricesArray.controls.forEach((group, index) => {
      if (index === 0) {
        group.enable({ emitEvent: false });
      } else {
        group.disable({ emitEvent: false });
      }
    });
  }

  private enableAllPrices() {
    this.pricesArray.controls.forEach((group) => {
      group.enable({ emitEvent: false });
    });
  }
}
