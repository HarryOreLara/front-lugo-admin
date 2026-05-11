import { Category } from '@class/category/category.class';
import { ProductPrice } from './product-prices.class';
import { Brand } from '@class/brand/brand.class';
import { Color } from '@class/color/color.class';
import { Partner } from '@class/partner/partner.class';

export class Product {
  public id: number;
  public sku: string;
  public barCode: string;
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
  public partner: Partner;
  public color: Color;
  public status: string;
  public isActive: boolean;
  public createdAt: Date;
  public updatedAt: Date;
  public prices: Array<ProductPrice>;

  public constructor(product: Partial<Product> = {}) {
    this.id = product.id ?? 0;
    this.sku = product.sku ?? '';
    this.barCode = product.barCode ?? '';
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
    this.partner = product.partner ?? new Partner();
    this.color = product.color ?? new Color();
    this.status = product.status ?? '';
    this.isActive = product.isActive ?? true;
    this.createdAt = product.createdAt ?? new Date();
    this.updatedAt = product.updatedAt ?? new Date();
    this.prices = product.prices ?? [];
  }

  static fromJson(product: unknown): Product {
    const casted = product as Record<string, unknown>;

    return new Product({
      id: casted['id'] as number,
      sku: casted['sku'] as string,
      barCode: casted['barcode'] as string,
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
      category: casted['category']
        ? Category.fromJson(casted['category'])
        : new Category(),
      brand: casted['brand'] ? Brand.fromJson(casted['brand']) : new Brand(),
      partner: casted['partner'] ? Partner.fromJson(casted['partner']) : new Partner(),
      color: casted['color'] ? Color.fromJson(casted['color']) : new Color(),
      status: casted['status'] as string,
      isActive: casted['isActive'] as boolean,
      createdAt: casted['createdAt'] as Date,
      updatedAt: casted['updatedAt'] as Date,
      prices: casted['prices']
        ? (casted['prices'] as Array<ProductPrice>).map((res) =>
            ProductPrice.fromJson(res),
          )
        : [],
    });
  }
}
