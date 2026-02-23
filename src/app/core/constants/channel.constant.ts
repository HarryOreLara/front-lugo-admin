import { Channel } from '@enums/channel.enum';
import { IParameterEnum } from '@interfaces/index';


export const CHANNEL_CONSTANT: Array<IParameterEnum> = [
  {
    id: Channel.MOBILE,
    name: 'Movil',
  },
  {
    id: Channel.WEB,
    name: 'Web',
  },
  {
    id: Channel.PHYSICAL,
    name: 'Tienda fisica',
  },
];
