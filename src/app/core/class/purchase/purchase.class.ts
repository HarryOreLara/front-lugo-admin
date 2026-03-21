import { Client } from '@class/client/client.class';
import { Employee } from '@class/employee/employee.class';
import { Payment } from '@class/payment/payment.class';
import { OrderStatus } from '@enums/order-status.enum';
import { PurchaseItem } from './purchase-item.class';
import { Channel } from '@enums/channel.enum';

export class Purchase {
  public id: number;
  public fullNumber: string;
  public subTotal: number;
  public total: number;
  public channel: Channel;
  public status: OrderStatus;
  public items: PurchaseItem[];
  public client: Client;
  public employee: Employee;
  public payments: Payment;

  public constructor(purchase: Partial<Purchase> = {}) {
    this.id = purchase.id ?? 0;
    this.fullNumber = purchase.fullNumber ?? '';
    this.subTotal = purchase.subTotal ?? 0;
    this.total = purchase.total ?? 0;
    this.channel = purchase.channel ?? Channel.PHYSICAL;
    this.status = purchase.status ?? OrderStatus.ACCEPTED;
    this.items = purchase.items ?? [];
    this.client = purchase.client ?? new Client();
    this.employee = purchase.employee ?? new Employee();
    this.payments = purchase.payments ?? new Payment();
  }

  static fromJson(purchase: unknown): Purchase {
    const casted = purchase as Record<string, unknown>;

    return new Purchase({
      id: casted['id'] as number,
      fullNumber: casted['fullNumber'] as string,
      subTotal: casted['subTotal'] as number,
      total: casted['total'] as number,
      channel: casted['channel'] as Channel,
      status: casted['status'] as OrderStatus,
      items: (casted['items'] as Array<PurchaseItem>).map((res) =>
        PurchaseItem.fromJson(res),
      ),
      client: Client.fromJson(casted['customer'] as Client),
      employee: Employee.fromJson(casted['employee'] as Employee),
      payments: Payment.fromJson(casted['payments'] as Client),
    });
  }
}
