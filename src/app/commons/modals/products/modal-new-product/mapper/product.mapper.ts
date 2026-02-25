import { Status } from '@enums/status.enum';
import { IProductForm, IProductPriceForm } from '../modals/product-form.modal';
import {
  IProductPriceRequest,
  IProductRquest,
} from '../modals/product-request.modal';

export const createProductMapper = (
  productForm: IProductForm,
): IProductRquest => {
  return {
    name: productForm.name,
    categoryId: productForm.category,
    brandId: productForm.brand,
    colorId: productForm.color,
    description: productForm.description,
    stock: productForm.stock,
    // unitAmount: productForm.unitAmount,
    // quantityBox: productForm.quantityBox,
    descriptionFull: productForm.descriptionFull,
    prices: productForm.prices.map((pric) => createPriceMapper(pric)),
    status: productForm.isActive ? Status.ACTIVE : Status.INACTIVE,
    isActive: productForm.isActive,
  } as IProductRquest;
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
