import { Component, Input } from '@angular/core';
import { Product } from '@class/index';
import { IParameterEnum } from '@interfaces/index';

@Component({
  selector: 'app-inventary-detail',
  templateUrl: './inventary-detail.container.html',
})
export class InventaryDetailContainer {
  @Input() public products: Array<Product> = [];
  @Input() public inventaryMovementsType: IParameterEnum[];
}
