import { InventaryMovementType } from '@enums/inventary-movement.enum';

export interface IInventaryForm {
  product: number;
  typeInventary: InventaryMovementType;
  quantity: number;
  reference: string;
  reason: string;
  unitCost: number;
  totalCost: number;
}
