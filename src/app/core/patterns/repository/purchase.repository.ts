import { Purchase } from '@class/purchase/purchase.class';
import { INewPurchaseRequest } from '@pages/purchase/new-purchase/commons/interfaces/new-purchase.request.interface';
import { Observable } from 'rxjs';

export interface PurchaseRepository {
  getAllPurchases(page: number, size: number): Observable<Purchase[]>;
  findPurchaseById(id: number): Observable<Purchase>;
  createPurchase(purchaseRequest: INewPurchaseRequest): Observable<Purchase>;
}
