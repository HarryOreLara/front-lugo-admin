import { Component, Input } from '@angular/core';
import { Product } from '@class/index';

@Component({
  selector: 'app-new-purchase-ui',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.css'],
})
export class NewPurchaseComponent {
  @Input() public products: Product[];

  color3: string;
  size3: string;
  liked1: boolean;
  quantity1: number;
}
