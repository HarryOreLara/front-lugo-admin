import { Injectable, Inject } from '@angular/core';
import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { InventaryMovementRepository } from '@patterns//repository/inventary-movement.repository';
import { Observable } from 'rxjs';
import { IInventaryMovementRequest } from 'src/app/commons/modals/products/modal-new-inventary/models/inventary-movement-request.model';
import { INVENTARY_MOVEMENT_REPOSITORY } from 'src/app/commons/tokens/inventary.token';

@Injectable({
  providedIn: 'root',
})
export class InventaryMovementService {
  constructor(
    @Inject(INVENTARY_MOVEMENT_REPOSITORY)
    private readonly inventaryMovementRepository: InventaryMovementRepository,
  ) {}

  getAllInventaryMovements(): Observable<InventaryMovement[]> {
    return this.inventaryMovementRepository.getAllInventaryMovement(10, 100);
  }

  createInventaryMovement(
    iventaryMovementRequest: IInventaryMovementRequest,
  ): Observable<InventaryMovement> {
    return this.inventaryMovementRepository.createInventaryMovement(
      iventaryMovementRequest,
    );
  }
}
