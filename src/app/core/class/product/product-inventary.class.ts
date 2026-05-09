export class ProductResponseInventary {
  public id: number;
  public name: string;
  public stock: number;

  public constructor(productPrice: Partial<ProductResponseInventary> = {}) {
    this.id = productPrice.id ?? 0;
    this.name = productPrice.name ?? '';
    this.stock = productPrice.stock ?? 0;
  }

  static fromJson(product: unknown): ProductResponseInventary {
    const casted = product as Record<string, unknown>;

    return new ProductResponseInventary({
      id: casted['id'] as number,
      name: casted['name'] as string,
      stock: casted['stock'] as number,
    });
  }
}
