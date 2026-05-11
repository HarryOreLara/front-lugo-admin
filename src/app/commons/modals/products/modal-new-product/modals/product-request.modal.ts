export interface IProductRequest {
  name: string;
  categoryId: number;
  brandId: number;
  colorId: number;
  description: string;
  stock: number;
  barcode: string;
  partnerId: number;
  descriptionFull: string;
  prices: Array<IProductPriceRequest>;
  status: string;
  isActive: boolean;
}

export interface IProductPriceRequest {
  channel: string;
  costPrice: number;
  salePrice: number;
  taxRate: number;
  validFrom: Date;
  validTo: Date;
}
