import { Product } from '@class/index';
import { InventaryMovementType } from '@enums/inventary-movement.enum';

export interface IInventaryForm {
  product: Product;
  typeInventary: InventaryMovementType;
  quantity: number;
  reference: string;
  reason: string;
  unitCost: number;
  totalCost: number;
}
