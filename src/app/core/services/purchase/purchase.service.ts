import { Inject, Injectable } from '@angular/core';
import { Purchase } from '@class/purchase/purchase.class';
import { INewPurchaseRequest } from '@pages/purchase/new-purchase/commons/interfaces/new-purchase.request.interface';
import { PurchaseRepository } from '@patterns//repository/purchase.repository';
import { Observable } from 'rxjs';
import { PURCHASE_REPOSITORY } from 'src/app/commons/tokens/purchase.token';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  constructor(
    @Inject(PURCHASE_REPOSITORY)
    private readonly purchaseRepository: PurchaseRepository,
  ) {}

  getAllPurchases(): Observable<Purchase[]> {
    return this.purchaseRepository.getAllPurchases(1, 10);
  }

  findOnePurchase(id: number): Observable<Purchase> {
    return this.purchaseRepository.findPurchaseById(id);
  }

  savePurchase(purchase: INewPurchaseRequest): Observable<Purchase> {
    return this.purchaseRepository.createPurchase(purchase);
  }
}
