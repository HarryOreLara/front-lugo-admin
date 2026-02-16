import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from '@class/index';
import { StepPresenter } from '@states/forms/step.presenter';

@Injectable({
  providedIn: 'root',
})
export class ProductsFormPresenter extends StepPresenter<Product> {
  sku: FormControl;
  barcode: FormControl;
  qrCode: FormControl;
  name: FormControl;
  description: FormControl;
  descriptionFull: FormControl;

  stock: FormControl;
  minStock: FormControl;
  maxStock: FormControl;

  unit: FormControl;
  images: FormControl;
  imageMajor: FormControl;

  category: FormControl;
  brand: FormControl;

  status: FormControl;
  isActive: FormControl;
  createdAt: FormControl;
  updatedAt: FormControl;

  costPrice: FormControl;
  salePrice: FormControl;

  hasIGV: FormControl;

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.sku = new FormControl(null);
    this.name = new FormControl(null);
    this.description = new FormControl(null);
    this.descriptionFull = new FormControl(null);
    this.category = new FormControl(null);
    this.brand = new FormControl(null);
    this.stock = new FormControl(null);
    this.minStock = new FormControl(null);
    this.unit = new FormControl(null);
    this.isActive = new FormControl(null);
    this.createdAt = new FormControl(null);
    this.updatedAt = new FormControl(null);
    this.costPrice = new FormControl(null);
    this.salePrice = new FormControl(null);
    this.hasIGV = new FormControl(null);
  }

  public createForm(): void {
    this.initForm();
    this.createValidators();

    this.form = this.fb.group({
      sku: this.sku,
      name: this.name,
      description: this.description,
      descriptionFull: this.descriptionFull,
      category: this.category,
      brand: this.brand,
      stock: this.stock,
      minStock: this.minStock,
      unit: this.unit,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      costPrice: this.costPrice,
      salePrice: this.salePrice,
      hasIGV: this.hasIGV,
    });
  }

  public createValidators() {
    this.sku = new FormControl(null, [Validators.required]);
    ((this.name = new FormControl(null)), [Validators.required]);
    this.description = new FormControl(null);
    this.descriptionFull = new FormControl(null);
    this.category = new FormControl(null);
    this.brand = new FormControl(null);
    this.stock = new FormControl(null);
    this.minStock = new FormControl(null);
    this.unit = new FormControl(null);
    this.isActive = new FormControl(null);
    this.createdAt = new FormControl(null);
    this.updatedAt = new FormControl(null);
    this.costPrice = new FormControl(null);
    this.salePrice = new FormControl(null);
    this.hasIGV = new FormControl(null);
  }
}
