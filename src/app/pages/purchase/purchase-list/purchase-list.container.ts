import { Component, OnInit } from '@angular/core';
import { Purchase } from '@class/purchase/purchase.class';
import { PurchaseFacade } from '@patterns//facade/purchase.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.container.html',
})
export class PurchaseListContainer implements OnInit {
  purchases$ = new BehaviorSubject<Purchase[]>([]);

  constructor(private readonly purchaseFacade: PurchaseFacade) {
    this.purchases$ = purchaseFacade.purchases$;
  }

  ngOnInit(): void {
    this.purchaseFacade.getAllFacade();
  }
}
