import { Channel } from '@enums/channel.enum';

export class Category {
  public id: number;
  public name: string;
  public code: string;
  public description: string;
  public channel: Channel;

  public constructor(category: Partial<Category> = {}) {
    this.id = category.id ?? 0;
    this.name = category.name ?? '';
    this.code = category.code ?? '';
    this.description = category.description ?? '';
    this.channel = category.channel ?? Channel.PHYSICAL;
  }

  static fromJson(category: unknown): Category {
    const casted = category as Record<string, unknown>;

    return new Category({
      id: casted['id'] as number,
      name: casted['name'] as string,
      code: casted['code'] as string,
      description: casted['description'] as string,
      channel: casted['channel'] as Channel,
    });
  }
}
