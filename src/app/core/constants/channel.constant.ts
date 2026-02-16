import { Channel } from '@enums/channel.enum';
import { IChannel } from '@interfaces/index';

export const CHANNEL_CONSTANT: Array<IChannel> = [
  {
    id: Channel.MOBILE,
    name: Channel.MOBILE,
  },
  {
    id: Channel.WEB,
    name: Channel.WEB,
  },
  {
    id: Channel.PHYSICAL,
    name: Channel.PHYSICAL,
  },
];
