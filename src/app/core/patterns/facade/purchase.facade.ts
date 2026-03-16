import { Injectable } from '@angular/core';
import { Client } from '@class/index';
import { IPurchaseForm } from '@pages/purchase/new-purchase/commons/interfaces/purchase-form.interface';
import { newPurchaseMapper } from '@pages/purchase/new-purchase/commons/mappers/purchase.mapper';

@Injectable({
  providedIn: 'root',
})
export class PurchaseFacade {
  createPurchase(purchaseForm: IPurchaseForm, client: Client) {
    const purchaseMapper = newPurchaseMapper(purchaseForm, client);

    console.log({
      purchaseMapper,
    });
  }
}
