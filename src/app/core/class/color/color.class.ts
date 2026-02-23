import { Channel } from '@enums/channel.enum';
import { Status } from '@enums/status.enum';

export class Color {
  public id?: number;
  public name: string;
  public code: string;
  public description: string;
  public channel: Channel;
  public isActive: boolean;
  public status: Status;

  public constructor(color: Partial<Color> = {}) {
    this.id = color.id ?? 0;
    this.name = color.name ?? '';
    this.code = color.code ?? '';
    this.description = color.description ?? '';
    this.channel = color.channel ?? Channel.PHYSICAL;
    this.isActive = color.isActive ?? false;
    this.status = color.status ?? Status.INACTIVE;
  }

  static fromJson(color: unknown): Color {
    const casted = color as Record<string, unknown>;

    return new Color({
      id: casted['id'] as number,
      name: casted['name'] as string,
      code: casted['code'] as string,
      description: casted['description'] as string,
      channel: casted['channel'] as Channel,
      isActive: casted['isActive'] as boolean,
      status: casted['status'] as Status,
    });
  }

  static toJson(color: Color): Color {
    return {
      code: color.code,
      name: color.name,
      description: color.description,
      channel: color.channel,
      isActive: color.isActive,
      status: color.isActive ? Status.ACTIVE : Status.INACTIVE,
    };
  }
}
