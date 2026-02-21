import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Parameter } from '@interfaces/parameter/paramter.interface';
import { ProductsFormPresenter } from 'src/app/commons/modals/products/modal-new-product/products-form.presenter';
import { IProductForm } from './modals/product-form.modal';

@Component({
  selector: 'app-modal-new-product-ui',
  templateUrl: './modal-new-product.component.html',
  styleUrls: ['./modal-new-product.component.css'],
})
export class ModalNewProductComponent {
  @Input() public title: string = 'Nuevo producto';
  @Input() public isLoading: boolean;
  @Input() public visibleModal: boolean;
  @Input() public brands: Array<Parameter>;
  @Input() public categories: Array<Parameter>;
  @Input() public colors: Array<Parameter>;
  @Input() public units: Array<Parameter>;

  @Output() saveProductEmit: EventEmitter<IProductForm> =
    new EventEmitter<IProductForm>();
  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

  constructor(public readonly productFormPresenter: ProductsFormPresenter) {
    this.createControls();
  }

  public saveProducts() {
    this.saveProductEmit.emit(this.productFormPresenter.Form.getRawValue());
  }

  public close() {
    this.closeEmit.emit();
  }

  private createControls() {
    this.productFormPresenter.createForm();
  }
}
