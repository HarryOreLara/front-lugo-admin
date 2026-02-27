import { InventaryMovementType } from '@enums/inventary-movement.enum';
import { IParameterEnum } from '@interfaces/index';

export const INVENTARY_MOVEMENT_CONSTANT: Array<IParameterEnum> = [
  {
    id: InventaryMovementType.INBOUND,
    name: 'Entrada',
    icon: 'pi-arrow-up-right',
    color: 'green'
  },
  {
    id: InventaryMovementType.ADJUSTMENT,
    name: 'Ajuste',
    icon: 'pi-arrow-right-arrow-left',
    color: 'orange'
  },
  {
    id: InventaryMovementType.OUTBOUND,
    name: 'Salida',
    icon: 'pi-arrow-down-right',
    color: 'red'
  },
  {
    id: InventaryMovementType.RETURN,
    name: 'Retorno',
    icon: 'pi-replay',
    color: 'blue'
  }
];