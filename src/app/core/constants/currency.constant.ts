import { CurrencyType } from '@enums/currency.enum';
import { IParameterEnum } from '@interfaces/index';

export const CURRENCY_TYPE: Array<IParameterEnum> = [
  {
    id: CurrencyType.SOLES,
    name: 'Soles',
  },
  {
    id: CurrencyType.DOLARES,
    name: 'Dolares',
  },
];
