import { Channel } from '@enums/channel.enum';
import { CurrencyType } from '@enums/currency.enum';
import { MethodPaymentType } from '@enums/method-payment.enum';
import { OrderStatus } from '@enums/order-status.enum';
import { PaymentStatus } from '@enums/payment-status.enum';
import { ProofPaymentType } from '@enums/proof-payment.enum';

/// Interfaz de orden
export interface IPurchaseForm {
  customer: number;
  employee: number;
  documentSerie: number;
  channel: Channel;
  subTotal: number;
  tax: number;
  total: number;
  status: OrderStatus;
  items: IPurchaseItemForm[];
  proofPaymentType: ProofPaymentType;
  methodPayment: MethodPaymentType;
  currency: CurrencyType;
  voucher: string;
}

export interface IPurchaseItemForm {
  product: number;
  quantity: number;
  unitPrice: number;
  salePrice: number;
}
