import { MethodPaymentType } from '@enums/method-payment.enum';
import { IParameterEnum } from '@interfaces/index';

export const METHOD_PAYMENT_CONSTANT: Array<IParameterEnum> = [
  {
    id: MethodPaymentType.TARJETA,
    name: 'Tarjeta',
  },
  {
    id: MethodPaymentType.EFECTIVO,
    name: 'Efectivo',
  },
  {
    id: MethodPaymentType.TRANSFERENCIA,
    name: 'Transferencia',
  },
  {
    id: MethodPaymentType.YAPE_PLIN,
    name: 'Yape / Plin',
  },
];
