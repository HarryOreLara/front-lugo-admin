import { Status } from '@enums/status.enum';
import { IParameterEnum } from '@interfaces/index';

export const STATUS_CONSTANT: IParameterEnum[] = [
  {
    id: Status.ACTIVE,
    name: 'Activo',
  },
  {
    id: Status.INACTIVE,
    name: 'Inactivo',
  },
];
