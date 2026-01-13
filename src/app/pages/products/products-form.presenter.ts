import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { StepPresenter } from '@states/forms/step.presenter';

@Injectable({
  providedIn: 'root',
})
export class ProductsFormPresenter extends StepPresenter<any> {
  id: FormControl;
  sku: FormControl;
  name: FormControl;
  description: FormControl;
  descriptionFull: FormControl;

  categoryId: FormControl;
  brandId: FormControl;

  costPrice: FormControl;
  salePrice: FormControl;
  margin: FormControl;

  stock: FormControl;
  minStock: FormControl;

  unit: FormControl;

  isActive: FormControl;

  createdAt: FormControl;
  updatedAt: FormControl;

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.id = new FormControl(null);
    this.sku = new FormControl(null);
    this.name = new FormControl(null);
    this.description = new FormControl(null);
    this.descriptionFull = new FormControl(null);

    this.categoryId = new FormControl(null);
    this.brandId = new FormControl(null);

    this.costPrice = new FormControl(null);
    this.salePrice = new FormControl(null);
    this.margin = new FormControl(null);

    this.stock = new FormControl(null);
    this.minStock = new FormControl(null);

    this.unit = new FormControl(null);

    this.isActive = new FormControl(null);

    this.createdAt = new FormControl(null);
    this.updatedAt = new FormControl(null);
  }

  public createForm(): void {
    this.initForm();

    this.form = this.fb.group({
      id: this.id,
      sku: this.sku,
      name: this.name,
      description: this.description,
      descriptionFull: this.descriptionFull,

      categoryId: this.categoryId,
      brandId: this.brandId,

      costPrice: this.costPrice,
      salePrice: this.salePrice,
      margin: this.margin,

      stock: this.stock,
      minStock: this.minStock,

      unit: this.unit,

      isActive: this.isActive,

      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    });
  }
}
