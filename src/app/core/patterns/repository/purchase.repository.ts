import { Purchase } from '@class/purchase/purchase.class';
import { Observable } from 'rxjs';

export interface PurchaseRepository {
  getAllPurchases(page: number, size: number): Observable<Purchase[]>;
  findPurchaseById(id: number): Observable<Purchase>;
  createPurchase(purchaseRequest: any): Observable<Purchase>;
}
