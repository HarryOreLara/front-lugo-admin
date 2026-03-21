import { Injectable } from '@angular/core';
import { Client } from '@class/index';
import { Purchase } from '@class/purchase/purchase.class';
import { IPurchaseForm } from '@pages/purchase/new-purchase/commons/interfaces/purchase-form.interface';
import { newPurchaseMapper } from '@pages/purchase/new-purchase/commons/mappers/purchase.mapper';
import { PurchaseService } from '@service/purchase/purchase.service';
import { BehaviorSubject, finalize, Subject, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PurchaseFacade {
  purchases$ = new BehaviorSubject<Purchase[]>([]);
  purchase$ = new BehaviorSubject<Purchase>(new Purchase());
  loading$ = new BehaviorSubject<boolean>(false);
  closeModal$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(private readonly purchaseService: PurchaseService) {}

  createPurchase(purchaseForm: IPurchaseForm, client: Client) {
    const purchaseMapper = newPurchaseMapper(purchaseForm, client);
    this.loading$.next(true);

    this.purchaseService
      .savePurchase(purchaseMapper)
      .pipe(
        tap((response) => {
          this.purchases$.next([response, ...this.purchases$.value]);

          this.closeModal$.next();
        }),
        takeUntil(this.destroy$),
        finalize(() => {
          this.loading$.next(false);
        }),
      )
      .subscribe();
  }

  getAllFacade() {
    this.purchaseService.getAllPurchases().subscribe((purchases) => {
      console.log({ purchases });
      this.purchases$.next(purchases);
    });
  }
}
