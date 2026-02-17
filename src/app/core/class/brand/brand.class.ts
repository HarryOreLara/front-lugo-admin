import { Channel } from '@enums/channel.enum';

export class Brand {
  public id: number;
  public name: string;
  public code: string;
  public channel: Channel;

  public constructor(brand: Partial<Brand> = {}) {
    this.id = brand.id ?? 0;
    this.name = brand.name ?? '';
    this.code = brand.code ?? '';
    this.channel = brand.channel ?? Channel.PHYSICAL;
  }

  static fromJson(brand: unknown): Brand {
    const casted = brand as Record<string, unknown>;

    return new Brand({
      id: casted['id'] as number,
      name: casted['name'] as string,
      code: casted['code'] as string,
      channel: casted['channel'] as Channel,
    });
  }
}
