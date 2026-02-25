export interface IProductForm {
  name: string;
  category: number;
  brand: number;
  color: number;
  description: string;
  stock: number;
  // unitAmount: number;
  // quantityBox: number;
  descriptionFull: string;
  prices: Array<IProductPriceForm>;
  status: string;
  isActive: boolean;
  useSamePrice: boolean;
}

export interface IProductPriceForm {
  channel: string;
  costPrice: number;
  salePrice: number;
  taxRate: number;
  validFrom: Date;
  validTo: Date;
}
