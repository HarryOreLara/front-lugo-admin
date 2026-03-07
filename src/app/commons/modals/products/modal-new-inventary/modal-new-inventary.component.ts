import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@class/index';
import { IParameterEnum } from '@interfaces/index';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { InventaryFormPresenter } from './inventary-form.presenter';
import { IInventaryForm } from './models/inventary.model';

@Component({
  selector: 'app-modal-new-inventary-ui',
  templateUrl: './modal-new-inventary.component.html',
  styleUrls: ['./modal-new-inventary.component.css'],
})
export class ModalNewInventaryComponent {
  @Input() public visibleModal: boolean;
  @Input() public isLoading: boolean;
  @Input() public products: Array<Product> = [];
  @Input() public inventaryMovementsType: IParameterEnum[];

  @Output() saveInventaryEmit: EventEmitter<IInventaryForm> =
    new EventEmitter<IInventaryForm>();
  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

  public filteredProducts: Product[] = [];

  constructor(public readonly inventaryFormPresenter: InventaryFormPresenter) {
    this.createControls();
  }

  ngOnInit() {}

  saveInventary() {
    this.saveInventaryEmit.emit(this.inventaryFormPresenter.Form.getRawValue());
  }

  public close() {
    this.closeEmit.emit();
  }

  filterProducts(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();

    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.sku?.toLowerCase().includes(query),
    );
  }

  public createControls() {
    this.inventaryFormPresenter.createForm();
  }
}
