export interface IInventaryMovementRequest {
  productId: number;
  quantity: number;
  typeInventary: string;
  reference: string;
  reason: string;
  unitCost: number;
  totalCost: number;
}
