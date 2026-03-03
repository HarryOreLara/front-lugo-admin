import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import { IParameterEnum } from '@interfaces/index';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { InventaryFormPresenter } from './inventary-form.presenter';

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
  public filteredProducts: Product[] = [];

  constructor(public readonly inventaryFormPresenter: InventaryFormPresenter) {
    this.createControls();
  }

  ngOnInit() {}

  saveInventary() {
    console.log({
      formulario: this.inventaryFormPresenter.Form.getRawValue(),
    });
  }

  close() {}

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
