import { Product } from '@class/product/product.class';

export class PurchaseItem {
  public id: number;
  public salePrice: number;
  public quantity: number;
  public unitPrice: number;
  public createdAt: Date;
  public product: Product;

  public constructor(purchaseItem: Partial<PurchaseItem> = {}) {
    this.id = purchaseItem.id ?? 0;
    this.salePrice = purchaseItem.salePrice ?? 0;
    this.quantity = purchaseItem.quantity ?? 0;
    this.unitPrice = purchaseItem.unitPrice ?? 0;
    this.createdAt = purchaseItem.createdAt ?? new Date();
    this.product = purchaseItem.product ?? new Product();
  }

  static fromJson(purchaseItem: unknown): PurchaseItem {

    const casted = purchaseItem as Record<string, unknown>;

    return new PurchaseItem({
      id: casted['id'] as number,
      salePrice: casted['salePrice'] as number,
      quantity: casted['quantity'] as number,
      unitPrice: casted['unitPrice'] as number,
      createdAt: casted['createdAt'] as Date,
      product: Product.fromJson(casted['product'] as Product),
    });
  }
}
