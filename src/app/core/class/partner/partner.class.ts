import { Channel } from '@enums/channel.enum';
import { Status } from '@enums/status.enum';

export class Partner {
  public id?: number;
  public name: string;
  public code: string;
  public description: string;
  public channel: Channel;
  public isActive: boolean;
  public status: Status;

  public constructor(partner: Partial<Partner> = {}) {
    this.id = partner.id ?? 0;
    this.name = partner.name ?? '';
    this.code = partner.code ?? '';
    this.description = partner.description ?? '';
    this.channel = partner.channel ?? Channel.PHYSICAL;
    this.isActive = partner.isActive ?? false;
    this.status = partner.status ?? Status.INACTIVE;
  }

  static fromJson(partner: unknown): Partner {
    const casted = partner as Record<string, unknown>;

    return new Partner({
      id: casted['id'] as number,
      name: casted['name'] as string,
      code: casted['code'] as string,
      description: casted['description'] as string,
      channel: casted['channel'] as Channel,
      isActive: casted['isActive'] as boolean,
      status: casted['status'] as Status,
    });
  }
}
