import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { Observable } from 'rxjs';
import { IInventaryMovementRequest } from 'src/app/commons/modals/products/modal-new-inventary/models/inventary-movement-request.model';

export interface InventaryMovementRepository {
  getAllInventaryMovement(
    page: number,
    size: number,
  ): Observable<InventaryMovement[]>;
  findInventaryMovementById(id: number): Observable<InventaryMovement>;
  createInventaryMovement(
    iventaryMovementRequest: IInventaryMovementRequest,
  ): Observable<InventaryMovement>;
  updateInventaryMovement(
    id: number,
    inventaryMovement: InventaryMovement,
  ): Observable<InventaryMovement>;
  deleteInventaryMovement(id: number): Observable<InventaryMovement>;
}
