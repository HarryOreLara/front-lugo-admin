import { InvoiceType } from '@enums/invoice-type.enum';
import { IParameterEnum } from '@interfaces/index';

export const INVOICE_TYPE_CONSTANT: Array<IParameterEnum> = [
  {
    id: InvoiceType.BOLETA,
    name: 'Boleta',
  },
  {
    id: InvoiceType.FACTURA,
    name: 'Factura',
  },
  {
    id: InvoiceType.BOLETA_ELECTRONICA,
    name: 'Bolet Electronica',
  },
  {
    id: InvoiceType.TICKET,
    name: 'Ticket',
  },
];
