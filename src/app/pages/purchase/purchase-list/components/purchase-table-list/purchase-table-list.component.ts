import { Component, Input } from '@angular/core';
import { Purchase } from '@class/purchase/purchase.class';

@Component({
  selector: 'app-purchase-table-list-ui',
  templateUrl: './purchase-table-list.component.html',
  styleUrls: ['./purchase-table-list.component.css'],
})
export class PurchaseTableListComponent {
  @Input() purchases: Array<Purchase> = [];
}
