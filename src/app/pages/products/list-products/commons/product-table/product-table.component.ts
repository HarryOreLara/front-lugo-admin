import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@class/index';
import { Parameter } from '@class/parameter/paramter.class';
import { Channel } from '@enums/channel.enum';
import { IParameterEnum } from '@interfaces/index';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-product-table-ui',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent {
  @Input() isLoading: boolean;
  @Input() products: Array<Product>;
  @Input() channels: Array<IParameterEnum>;
  @Input() status: Array<IParameterEnum>;
  @Input() public brands: Array<Parameter>;
  @Input() public categories: Array<Parameter>;

  @Output() changeChannelEmit: EventEmitter<Channel> =
    new EventEmitter<Channel>();

  @Output() updateProductEmit: EventEmitter<Product> =
    new EventEmitter<Product>();

  changeChannelSearch({ value }: { value: Channel }) {
    console.log({ value });
    if (value === null) return;
    this.changeChannelEmit.emit(value);
  }

  clear(table: Table) {
    table.clear();
  }

  public updateProduct(product: Product) {
    this.updateProductEmit.emit(product);
    // this.modalService.openByName(MODELS_ENUM.MODAL_NEW_PRODUCT, {
    //   product: product,
    // });
  }

  public deleteProduct(product: Product) {
    console.log('Eliminar categoría:', product);
  }
}
