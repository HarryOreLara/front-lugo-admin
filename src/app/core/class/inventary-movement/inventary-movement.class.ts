import { Standar } from '@class/standar/standar.class';
import { InventaryMovementType } from '@enums/inventary-movement.enum';

export class InventaryMovement {
  public id: number;
  public product: Standar;
  public typeInventary: InventaryMovementType;
  public quantity: number;
  public stockBefore: number;
  public stockAfter: number;
  public reference: string;
  public reason: string;
  public unitCost: number;
  public totalCost: number;
  public createdAt: Date;
  public updatedAt: Date;

  public constructor(inventaryMovement: Partial<InventaryMovement> = {}) {
    this.id = inventaryMovement.id ?? 0;
    this.product = inventaryMovement.product ?? new Standar();
    this.typeInventary =
      inventaryMovement.typeInventary ?? InventaryMovementType.ADJUSTMENT;
    this.quantity = inventaryMovement.quantity ?? 0;
    this.stockBefore = inventaryMovement.stockBefore ?? 0;
    this.stockAfter = inventaryMovement.stockAfter ?? 0;
    this.reference = inventaryMovement.reference ?? '';
    this.reason = inventaryMovement.reason ?? '';
    this.unitCost = inventaryMovement.unitCost ?? 0;
    this.totalCost = inventaryMovement.totalCost ?? 0;
    this.createdAt = inventaryMovement.createdAt ?? new Date();
    this.updatedAt = inventaryMovement.updatedAt ?? new Date();
  }

  static fromJson(inventaryMovement: unknown): InventaryMovement {
    const casted = inventaryMovement as Record<string, unknown>;

    return new InventaryMovement({
      id: casted['id'] as number,
      product: Standar.fromJson(casted['product']),
      typeInventary: casted['typeInventary'] as InventaryMovementType,
      quantity: casted['quantity'] as number,
      stockBefore: casted['stockBefore'] as number,
      stockAfter: casted['stockAfter'] as number,
      reference: casted['reference'] as string,
      reason: casted['reason'] as string,
      unitCost: casted['unitCost'] as number,
      totalCost: casted['totalCost'] as number,
      createdAt: casted['createdAt'] as Date,
      updatedAt: casted['updatedAt'] as Date,
    });
  }
}
