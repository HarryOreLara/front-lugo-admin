import { Channel } from '@enums/channel.enum';

export interface IBrandForm {
  name: string;
  code: string;
  description: string;
  channel: Channel;
  isActive: boolean;
}
