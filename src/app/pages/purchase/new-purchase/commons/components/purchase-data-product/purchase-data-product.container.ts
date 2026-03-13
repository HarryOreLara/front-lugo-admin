import { Component, Input } from '@angular/core';
import { Product } from '@class/index';

@Component({
  selector: 'app-purchase-data-product',
  templateUrl: './purchase-data-product.container.html',
})
export class PurchaseDataProductContainer {
  @Input() public products: Product[];
}
