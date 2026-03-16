import { OrderStatus } from '@enums/order-status.enum';
import { INewPurchaseRequest } from '../interfaces/new-purchase.request.interface';
import { IPurchaseForm } from '../interfaces/purchase-form.interface';
import { Channel } from '@enums/channel.enum';
import { Client } from '@class/index';

export const newPurchaseMapper = (
  purchaseForm: IPurchaseForm,
  client: Client,
): INewPurchaseRequest => {
  return {
    documentSeries: purchaseForm.proofPaymentType,
    status: OrderStatus.DELIVERED,
    subTotal: purchaseForm.subTotal,
    total: purchaseForm.total,
    channel: Channel.PHYSICAL,
    items: purchaseForm.items,
    tax: 0,
    currency: purchaseForm.currency,
    methodPayment: purchaseForm.methodPayment,
    customer: client.id === 0 ? null : client.id,
    employee: 1
  } as INewPurchaseRequest;
};
