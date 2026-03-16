import { OrderStatus } from '@enums/order-status.enum';
import {
  INewPurchaseItem,
  INewPurchaseRequest,
} from '../interfaces/new-purchase.request.interface';
import {
  IPurchaseForm,
  IPurchaseItemForm,
} from '../interfaces/purchase-form.interface';
import { Channel } from '@enums/channel.enum';
import { Client } from '@class/index';

export const newPurchaseMapper = (
  purchaseForm: IPurchaseForm,
  client: Client,
): INewPurchaseRequest => {
  return {
    invoiceType: purchaseForm.invoiceType,
    status: OrderStatus.DELIVERED,
    subTotal: purchaseForm.subTotal,
    total: purchaseForm.total,
    channel: Channel.PHYSICAL,
    orderItem: newPurchaseItemMapper(purchaseForm.items),
    tax: 0,
    currency: purchaseForm.currency,
    methodPayment: purchaseForm.methodPayment,
    customerId: client.id === 0 ? null : client.id,
    employeeId: 1,
  } as INewPurchaseRequest;
};

export const newPurchaseItemMapper = (
  purchaseItemForm: IPurchaseItemForm[],
): INewPurchaseItem[] => {
  return purchaseItemForm.map((item) => {
    return {
      productId: item.product,
      quantity: item.quantity,
      salePrice: item.salePrice,
      unitPrice: item.unitPrice,
    } as INewPurchaseItem;
  });
};
