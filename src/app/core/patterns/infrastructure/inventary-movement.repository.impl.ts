import { Injectable } from '@angular/core';
import { InventaryMovementRepository } from '../repository/inventary-movement.repository';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { map, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { IGenericArrays } from '@interfaces/genericas/IGeneric.interface';

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
    inventaryMovement: InventaryMovement,
  ): Observable<InventaryMovement> {
    throw new Error('Method not implemented.');
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
