import { Channel } from '@enums/channel.enum';
import { CurrencyType } from '@enums/currency.enum';
import { MethodPaymentType } from '@enums/method-payment.enum';
import { OrderStatus } from '@enums/order-status.enum';
import { ProofPaymentType } from '@enums/proof-payment.enum';

export interface INewPurchaseRequest {
  customer: number;
  employee: number;
  documentSeries: ProofPaymentType;
  channel: Channel;
  subTotal: number;
  tax: number;
  total: number;
  status: OrderStatus;
  currency: CurrencyType;
  methodPayment: MethodPaymentType;
  items: INewPurchaseItem[];
}

export interface INewPurchaseItem {
  order: number;
  product: number;
  quantity: number;
  unitPrice: number;
  salePrice: number;
}
