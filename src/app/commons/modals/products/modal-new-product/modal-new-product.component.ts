import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { Category } from '@class/category/category.class';
import { Product } from '@class/index';
import { ModalService } from '@components//host/app-modal.service';
import { ProductsFormPresenter } from '@pages/products/products-form.presenter';

@Component({
  selector: 'app-modal-new-product-ui',
  templateUrl: './modal-new-product.component.html',
  styleUrls: ['./modal-new-product.component.css'],
})
export class ModalNewProductComponent {
  @Input() public title: string = 'Nuevo producto';
  @Input() public isLoading: boolean;
  @Input() public visibleModal: boolean;
  @Input() public brands: Array<Brand>;
  @Input() public categories: Array<Category>;

  public countries: any = [];

  @Output() saveProductEmit: EventEmitter<Product> =
    new EventEmitter<Product>();
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
