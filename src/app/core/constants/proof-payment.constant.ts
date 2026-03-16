import { ProofPaymentType } from '@enums/proof-payment.enum';
import { IParameterEnum } from '@interfaces/index';

export const PROOF_PAYMENT_CONSTANT: Array<IParameterEnum> = [
  {
    id: ProofPaymentType.BOLETA,
    name: 'Boleta',
  },
  {
    id: ProofPaymentType.FACTURA,
    name: 'Factura',
  },
];
