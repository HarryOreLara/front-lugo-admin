import { Component, Input } from '@angular/core';
import { Purchase } from '@class/purchase/purchase.class';

@Component({
  selector: 'app-purchase-list-ui',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css'],
})
export class PurchaseListComponent {
  @Input() purchases: Array<Purchase> = [];
}
