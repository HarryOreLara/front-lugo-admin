import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventaryFormPresenter } from '../../inventary-form.presenter';
import { IParameterEnum } from '@interfaces/index';
import { IInventaryForm } from '../../models/inventary.model';
import { Product } from '@class/index';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Channel } from '@enums/channel.enum';
import { InventaryMovementType } from '@enums/inventary-movement.enum';

@Component({
  selector: 'app-inventary-detail-ui',
  templateUrl: './inventary-detail.component.html',
  styleUrls: ['./inventary-detail.component.css'],
})
export class InventaryDetailComponent implements OnInit {
  @Input() public isLoading: boolean;
  @Input() public products: Array<Product> = [];
  @Input() public inventaryMovementsType: IParameterEnum[];

  @Output() saveInventaryEmit: EventEmitter<IInventaryForm> =
    new EventEmitter<IInventaryForm>();
  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

  public filteredProducts: Product[] = [];
  public hasStock = true;

  constructor(public readonly inventaryFormPresenter: InventaryFormPresenter) {
    this.createControls();
  }
  ngOnInit(): void {
    this.initChangesForm();
  }

  public initChangesForm() {
    this.changeProduct();
  }

  public createControls() {
    this.inventaryFormPresenter.createForm();
  }

  public filterProducts(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();

    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.sku?.toLowerCase().includes(query) ||
        product.barCode?.toLowerCase().includes(query),
    );
  }

  public isDisabled(item: any): boolean {
    if (this.hasStock) return false;

    return (
      item.id === InventaryMovementType.RETURN ||
      item.id === InventaryMovementType.OUTBOUND ||
      item.id === InventaryMovementType.ADJUSTMENT
    );
  }

  public changeProduct() {
    this.inventaryFormPresenter.Form.get('product')?.valueChanges.subscribe(
      (product: Product) => {
        if (typeof product !== 'object') return;

        const stock = product.stock ?? 0;
        this.hasStock = stock > 0;

        const price = product.prices?.find(
          (x) => x.channel === Channel.PHYSICAL,
        );

        const value = price?.costPrice ?? 0;

        this.inventaryFormPresenter.Form.get('unitCost')?.patchValue(value);

        if (!this.hasStock) {
          this.inventaryFormPresenter.typeInventary.setValue(null);
        }
      },
    );
  }
}
