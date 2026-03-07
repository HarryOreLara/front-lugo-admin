import { Injectable } from '@angular/core';
import { InventaryMovementRepository } from '../repository/inventary-movement.repository';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  IGeneric,
  IGenericArrays,
} from '@interfaces/genericas/IGeneric.interface';
import { IInventaryMovementRequest } from 'src/app/commons/modals/products/modal-new-inventary/models/inventary-movement-request.model';

@Injectable({
  providedIn: 'root',
})
export class InventaryMovementRepositoryImpl implements InventaryMovementRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  getAllInventaryMovement(
    page: number,
    size: number,
  ): Observable<InventaryMovement[]> {
    const direction = `${this.apiUrl}/inventory-movement/getAllInventary`;

    return this.http
      .get<IGenericArrays<InventaryMovement[]>>(direction)
      .pipe(
        map((response: IGenericArrays<InventaryMovement[]>) =>
          response.data.map((product) => InventaryMovement.fromJson(product)),
        ),
      );
  }

  findInventaryMovementById(id: number): Observable<InventaryMovement> {
    throw new Error('Method not implemented.');
  }
  createInventaryMovement(
    inventaryMovementRequest: IInventaryMovementRequest,
  ): Observable<InventaryMovement> {
    const direction = `${this.apiUrl}/inventory-movement/create`;

    return this.http
      .post<IGeneric<InventaryMovement>>(direction, inventaryMovementRequest)
      .pipe(
        map((response: IGeneric<InventaryMovement>) =>
          InventaryMovement.fromJson(response.data),
        ),
      );
  }
  updateInventaryMovement(
    id: number,
    inventaryMovement: InventaryMovement,
  ): Observable<InventaryMovement> {
    throw new Error('Method not implemented.');
  }
  deleteInventaryMovement(id: number): Observable<InventaryMovement> {
    throw new Error('Method not implemented.');
  }
}
