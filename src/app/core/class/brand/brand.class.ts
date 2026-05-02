import { Channel } from '@enums/channel.enum';
import { Status } from '@enums/status.enum';

export class Brand {
  public id: number;
  public name: string;
  public code: string;
  public description: string;
  public channel: Channel;
  public isActive: boolean;
  public status: Status;
  public imageUrl: string;

  public constructor(brand: Partial<Brand> = {}) {
    this.id = brand.id ?? 0;
    this.name = brand.name ?? '';
    this.code = brand.code ?? '';
    this.description = brand.description ?? '';
    this.channel = brand.channel ?? Channel.PHYSICAL;
    this.isActive = brand.isActive ?? false;
    this.status = brand.status ?? Status.INACTIVE;
    this.imageUrl = brand.imageUrl ?? '';
  }

  static fromJson(brand: unknown): Brand {
    const casted = brand as Record<string, unknown>;

    return new Brand({
      id: casted['id'] as number,
      name: casted['name'] as string,
      code: casted['code'] as string,
      description: casted['description'] as string,
      channel: casted['channel'] as Channel,
      isActive: casted['isActive'] as boolean,
      status: casted['status'] as Status,
      imageUrl: casted['imageUrl'] as string,
    });
  }
}
