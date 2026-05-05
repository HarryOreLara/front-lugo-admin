import { Channel } from '@enums/channel.enum';
import { Status } from '@enums/status.enum';

export interface IBrandRequest {
  name: string;
  code: string;
  description: string;
  channel: Channel;
  isActive: boolean;
  status: Status;
}
