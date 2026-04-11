import { Channel } from '@enums/channel.enum';
import { CurrencyType } from '@enums/currency.enum';
import { MethodPaymentType } from '@enums/method-payment.enum';
import { OrderStatus } from '@enums/order-status.enum';
import { InvoiceType } from '@enums/invoice-type.enum';

export interface INewPurchaseRequest {
  customerId: number;
  employeeId: number;
  invoiceType: InvoiceType;
  channel: Channel;
  subTotal: number;
  tax: number;
  total: number;
  status: OrderStatus;
  currency: CurrencyType;
  methodPayment: MethodPaymentType;
  orderItems: INewPurchaseItem[];
  voucher: string;
}

export interface INewPurchaseItem {
  
  productId: number;
  quantity: number;
  unitPrice: number;
  salePrice: number;
}
