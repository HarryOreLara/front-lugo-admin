import { IInventaryMovementRequest } from '../models/inventary-movement-request.model';
import { IInventaryForm } from '../models/inventary.model';

export const createInventaryMovementMapper = (
  inventaryForm: IInventaryForm,
): IInventaryMovementRequest => {
  return {
    productId: inventaryForm.product.id,
    quantity: inventaryForm.quantity,
    typeInventary: inventaryForm.typeInventary,
    reference: inventaryForm.reference,
    reason: inventaryForm.reason,
    unitCost: inventaryForm.unitCost,
    totalCost: inventaryForm.totalCost,
  } as IInventaryMovementRequest;
};
