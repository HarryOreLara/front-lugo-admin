import { Injectable } from '@angular/core';
import { PurchaseRepository } from '../repository/purchase.repository';
import { Purchase } from '@class/purchase/purchase.class';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { IGeneric, IGenericArrays } from '@interfaces/genericas/IGeneric.interface';
import { INewPurchaseRequest } from '@pages/purchase/new-purchase/commons/interfaces/new-purchase.request.interface';

@Injectable({
  providedIn: 'root',
})
export class PurchaseRepositoryImpl implements PurchaseRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}
  findPurchaseById(id: number): Observable<Purchase> {
    throw new Error('Method not implemented.');
  }

  createPurchase(purchaseRequest: INewPurchaseRequest): Observable<Purchase> {
    const direction = `${this.apiUrl}/order/createOrder`;

    return this.http
      .post<IGeneric<Purchase>>(direction, purchaseRequest)
      .pipe(
        map((response: IGeneric<Purchase>) => Purchase.fromJson(response.data)),
      );
  }

  getAllPurchases(page: number, size: number): Observable<Purchase[]> {
    const direction = `${this.apiUrl}/order/getAllOrders`;

    return this.http
      .get<IGenericArrays<Purchase[]>>(direction)
      .pipe(
        map((response: IGenericArrays<Purchase[]>) =>
          response.data.map((product) => Purchase.fromJson(product)),
        ),
      );
  }
}
