export class Product {
  id: string;
  sku: string;
  name: string;
  description?: string;

  categoryId: string;
  brandId: string;

  costPrice: number;
  salePrice: number;
  margin?: number;

  stock: number;
  minStock: number;

  //   unit: 'unit' | 'box' | 'kg' | 'lt';
  unit: string;

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}
