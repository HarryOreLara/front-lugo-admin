import { Channel } from '@enums/channel.enum';

export class ProductPrice {
  public id: number;
  public channel: Channel;
  public costPrice: number;
  public salePrice: number;
  public taxRate: number;
  public validFrom: Date;
  public validTo: Date;

  public constructor(productPrice: Partial<ProductPrice> = {}) {
    this.id = productPrice.id ?? 0;
    this.channel = productPrice.channel ?? Channel.PHYSICAL;
    this.costPrice = productPrice.costPrice ?? 0;
    this.salePrice = productPrice.salePrice ?? 0;
    this.taxRate = productPrice.taxRate ?? 0;
    this.validFrom = productPrice.validFrom ?? new Date();
    this.validTo = productPrice.validTo ?? new Date();
  }


  static fromJson(productPrice: unknown): ProductPrice {
    const casted = productPrice as Record<string, unknown>;

    return new ProductPrice({
      id: casted['id'] as number,
      channel: casted['channel'] as Channel,
      costPrice: casted['costPrice'] as number,
      salePrice: casted['salePrice'] as number,
      taxRate: casted['taxRate'] as number,
      validFrom: casted['validFrom'] as Date,
      validTo: casted['validTo'] as Date,
    });
  }
}
