import { Component, Input } from '@angular/core';
import { Purchase } from '@class/purchase/purchase.class';
import { PurchaseFacade } from '@patterns//facade/purchase.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-purchase-table-list',
  templateUrl: './purchase-table-list.container.html',
})
export class PurchaseTableListContainer {
  @Input() purchases: Array<Purchase> = [];
}
