import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { BrandFormPresenter } from './brand.form.presenter';

@Component({
  selector: 'app-modal-new-brand-ui',
  templateUrl: './modal-new-brand.component.html',
  styleUrls: ['./modal-new-brand.component.css'],
})
export class ModalNewBrandComponent {
  @Input() brand: Brand;
  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

  @Input() public isLoading: boolean;
  @Input() public visibleModal: boolean;
  @Output() saveBrandEmitter: EventEmitter<Brand> = new EventEmitter<Brand>();
  @Output() updateBrandEmitter: EventEmitter<{
    brand: Brand;
    id: number;
  }> = new EventEmitter<{ brand: Brand; id: number }>();

  constructor(public readonly brandPresenter: BrandFormPresenter) {
    this.createControls();
  }

  public close() {
    this.closeEmit.emit();
  }

  saveBrand() {
    this.saveBrandEmitter.emit(this.brandPresenter.Form.getRawValue());
  }

  updateBrand() {
    this.updateBrandEmitter.emit({
      brand: this.brandPresenter.Form.getRawValue(),
      id: this.brand.id!,
    });
  }

  public createControls() {
    this.brandPresenter.createForm();
  }
}
