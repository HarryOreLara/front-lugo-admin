import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '@class/index';
import { InventaryMovementType } from '@enums/inventary-movement.enum';
import { IParameterEnum } from '@interfaces/index';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

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
  public selectedProduct!: Product;
  public filteredProducts: Product[] = [];

  public animal: number;

  public selectedMovement!: string;
  movementTypeControl = new FormControl<string | null>(null);
  ngOnInit() {
    this.movementTypeControl.setValue(InventaryMovementType.INBOUND);
  }

  getSelectedMovementType() {
    return this.movementTypeControl.value;
  }

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
