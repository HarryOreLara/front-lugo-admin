import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InventaryFormPresenter } from '../../inventary-form.presenter';
import { IParameterEnum } from '@interfaces/index';
import { IInventaryForm } from '../../models/inventary.model';
import { Product } from '@class/index';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteOnSelectEvent,
} from 'primeng/autocomplete';
import { Channel } from '@enums/channel.enum';

@Component({
  selector: 'app-inventary-detail-ui',
  templateUrl: './inventary-detail.component.html',
  styleUrls: ['./inventary-detail.component.css'],
})
export class InventaryDetailComponent {
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

  public createControls() {
    this.inventaryFormPresenter.createForm();
  }

  filterProducts(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();

    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.sku?.toLowerCase().includes(query) ||
        product.barcode?.toLowerCase().includes(query),
    );
  }

  onProductSelect(event: AutoCompleteOnSelectEvent) {
    const price = (event.value as Product).prices?.find(
      (x) => x.channel === Channel.PHYSICAL,
    );

    const value = price?.costPrice ?? 0;

    this.inventaryFormPresenter.Form.get('unitCost')?.patchValue(value)
  }

  // public get currentInvestment(): number {
  //   const price = this.reactiveProduct?.prices?.find(
  //     (x) => x.channel === Channel.PHYSICAL,
  //   );

  //   const value = price?.costPrice ?? 0;
  //   const quantity = Number(this.quantity) || 0;

  //   return value * quantity;
  // }
}
