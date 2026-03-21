import { CurrencyType } from '@enums/currency.enum';
import { MethodPaymentType } from '@enums/method-payment.enum';
import { PaymentStatus } from '@enums/payment-status.enum';

export class Payment {
  public id: number;
  public amount: number;
  public currency: CurrencyType;
  public method: MethodPaymentType;
  public paidAt: Date;
  public status: PaymentStatus;

  public constructor(payment: Partial<Payment> = {}) {
    this.id = payment.id ?? 0;
    this.amount = payment.amount ?? 0;
    this.currency = payment.currency ?? CurrencyType.SOLES;
    this.method = payment.method ?? MethodPaymentType.EFECTIVO;
    this.paidAt = payment.paidAt ?? new Date();
    this.status = payment.status ?? PaymentStatus.PENDING;
  }

  static fromJson(payment: unknown): Payment {
    const casted = payment as Record<string, unknown>;

    return new Payment({
      id: casted['id'] as number,
      amount: casted['amount'] as number,
      currency: casted['currency'] as CurrencyType,
      method: casted['method'] as MethodPaymentType,
      paidAt: casted['paidAt'] as Date,
      status: casted['status'] as PaymentStatus,
    });
  }
}
