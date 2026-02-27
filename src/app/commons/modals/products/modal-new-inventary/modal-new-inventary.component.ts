import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-modal-new-inventary-ui',
  templateUrl: './modal-new-inventary.component.html',
  styleUrls: ['./modal-new-inventary.component.css'],
})
export class ModalNewInventaryComponent {
  @Input() public visibleModal: boolean;
  @Input() public isLoading: boolean;
  @Input() products: Array<Product> = [];

  public selectedProduct!: Product;
  public filteredProducts: Product[] = [];

  public animal: number;

  saveInventary() {
    console.log(this.selectedProduct);
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
}
