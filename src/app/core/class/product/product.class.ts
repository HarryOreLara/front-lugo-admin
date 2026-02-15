import { Category } from '@class/category/category.class';
import { ProductPrice } from './product-prices.class';
import { Brand } from '@class/brand/brand.class';

export class Product {
  public id: number;
  public sku: string;
  public barcode: string;
  public qrCode: string;
  public name: string;
  public description: string;
  public descriptionFull: string;
  public stock: number;
  public minStock: number;
  public maxStock: number;
  public unit: string;
  public images: Array<string>;
  public imageMajor: string;
  public category: Category;
  public brand: Brand;
  public status: string;
  public isActive: boolean;
  public createdAt: Date;
  public updatedAt: Date;
  public prices: ProductPrice;

  public constructor(product: Partial<Product> = {}) {
    this.id = product.id ?? 0;
    this.sku = product.sku ?? '';
    this.barcode = product.barcode ?? '';
    this.qrCode = product.qrCode ?? '';
    this.name = product.name ?? '';
    this.description = product.description ?? '';
    this.descriptionFull = product.descriptionFull ?? '';
    this.stock = product.stock ?? 0;
    this.minStock = product.minStock ?? 0;
    this.maxStock = product.maxStock ?? 0;
    this.unit = product.unit ?? '';
    this.images = product.images ?? [];
    this.imageMajor = product.imageMajor ?? '';
    this.category = product.category ?? new Category();
    this.brand = product.brand ?? new Brand();
    this.status = product.status ?? '';
    this.isActive = product.isActive ?? true;
    this.createdAt = product.createdAt ?? new Date();
    this.updatedAt = product.updatedAt ?? new Date();
    this.prices = product.prices ?? new ProductPrice();
  }

  static fromJson(product: unknown): Product {
    const casted = product as Record<string, unknown>;

    return new Product({
      id: casted['id'] as number,
      sku: casted['sku'] as string,
      barcode: casted['barcode'] as string,
      qrCode: casted['qrCode'] as string,
      name: casted['name'] as string,
      description: casted['description'] as string,
      descriptionFull: casted['descriptionFull'] as string,
      stock: casted['stock'] as number,
      minStock: casted['minStock'] as number,
      maxStock: casted['maxStock'] as number,
      unit: casted['unit'] as string,
      images: casted['images'] as Array<string>,
      imageMajor: casted['imageMajor'] as string,
      category: Category.fromJson(casted['category']),
      brand: Brand.fromJson(casted['brand']),
      status: casted['status'] as string,
      isActive: casted['isActive'] as boolean,
      createdAt: casted['createdAt'] as Date,
      updatedAt: casted['updatedAt'] as Date,
      prices: ProductPrice.fromJson(casted['prices']),
    });
  }
}
