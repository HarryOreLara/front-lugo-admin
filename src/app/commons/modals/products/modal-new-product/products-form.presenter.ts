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

  prices: FormControl;

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
    this.prices = new FormControl(null);
  }

  public createForm(product?: Product): void {
    this.form = this.fb.group({
      sku: [product?.sku ?? null, Validators.required],
      barcode: [product?.barcode ?? null],
      qrCode: [product?.qrCode ?? null],
      name: [product?.name ?? null, Validators.required],
      description: [product?.description ?? null, Validators.required],
      descriptionFull: [product?.descriptionFull ?? null],
      stock: [product?.stock ?? 0],
      minStock: [product?.minStock ?? 0],
      maxStock: [product?.maxStock ?? 0],
      unit: [product?.unit ?? null],
      images: this.fb.array(
        product?.images?.map((img) => this.fb.control(img)) ?? [],
      ),
      imageMajor: [product?.imageMajor ?? null],
      category: this.fb.group({
        id: [product?.category?.id ?? null],
        name: [product?.category?.name ?? null],
      }),
      brand: this.fb.group({
        id: [product?.brand?.id ?? null],
        name: [product?.brand?.name ?? null],
      }),
      // prices: this.fb.group({
      //   channel: [product?.prices?.channel ?? 0],
      //   costPrice: [product?.prices?.costPrice ?? 0],
      //   salePrice: [product?.prices?.salePrice ?? 0],
      //   taxRate: [product?.prices?.taxRate ?? 0],
      //   validFrom: [product?.prices?.validFrom ?? 0],
      //   validTo: [product?.prices?.validTo ?? 0],
      // }),
      status: [product?.status ?? null],
      isActive: [product?.isActive ?? true],
      createdAt: [product?.createdAt ?? new Date()],
      updatedAt: [product?.updatedAt ?? new Date()],
    });
  }

  public createValidators() {
    this.sku = new FormControl(null, [Validators.required]);
    ((this.name = new FormControl(null)), [Validators.required]);
    this.description = new FormControl(null, [Validators.required]);
    this.descriptionFull = new FormControl(null);
    this.category = new FormControl(null);
    this.brand = new FormControl(null);
    this.stock = new FormControl(null);
    this.minStock = new FormControl(null);
    this.unit = new FormControl(null);
    this.isActive = new FormControl(null);
    this.createdAt = new FormControl(null);
    this.updatedAt = new FormControl(null);
    this.prices = new FormControl(null);
  }
}
