import { Status } from '@enums/status.enum';
import { IProductForm, IProductPriceForm } from '../modals/product-form.modal';
import {
  IProductPriceRequest,
  IProductRequest,
} from '../modals/product-request.modal';

export const createProductMapper = (
  productForm: IProductForm,
): IProductRequest => {
  console.log({productForm});
  return {
    name: productForm.name.toUpperCase(),
    categoryId: productForm.category,
    brandId: productForm.brand,
    colorId: productForm.color,
    description: productForm.description,
    stock: productForm.stock ? productForm.stock : 0,
    sku: productForm.sku,
    barcode: productForm.barCode,
    descriptionFull: productForm.descriptionFull,
    prices: productForm.prices.map((pric) => createPriceMapper(pric)),
    status: productForm.isActive ? Status.ACTIVE : Status.INACTIVE,
    isActive: productForm.isActive,
  } as IProductRequest;
};

export const createPriceMapper = (
  pricesForm: IProductPriceForm,
): IProductPriceRequest => {
  const validFrom = new Date();

  const validTo = new Date();
  validTo.setFullYear(validTo.getFullYear() + 5);
  return {
    channel: pricesForm.channel,
    costPrice: pricesForm.costPrice,
    salePrice: pricesForm.salePrice,
    taxRate: pricesForm.taxRate,
    validFrom,
    validTo,
  } as IProductPriceRequest;
};
