import { InventaryMovement } from '@class/inventary-movement/inventary-movement.class';
import { Observable } from 'rxjs';

export interface InventaryMovementRepository {
  getAllInventaryMovement(
    page: number,
    size: number,
  ): Observable<InventaryMovement[]>;
  findInventaryMovementById(id: number): Observable<InventaryMovement>;
  createInventaryMovement(
    inventaryMovement: InventaryMovement,
  ): Observable<InventaryMovement>;
  updateInventaryMovement(
    id: number,
    inventaryMovement: InventaryMovement,
  ): Observable<InventaryMovement>;
  deleteInventaryMovement(id: number): Observable<InventaryMovement>;
}
