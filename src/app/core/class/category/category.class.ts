import { Channel } from '@enums/channel.enum';
import { Status } from '@enums/status.enum';

export class Category {
  public id?: number;
  public name: string;
  public code: string;
  public description: string;
  public channel: Channel;
  public isActive: boolean;
  public status: Status;

  public constructor(category: Partial<Category> = {}) {
    this.id = category.id ?? 0;
    this.name = category.name ?? '';
    this.code = category.code ?? '';
    this.description = category.description ?? '';
    this.channel = category.channel ?? Channel.PHYSICAL;
    this.isActive = category.isActive ?? false;
    this.status = category.status ?? Status.INACTIVE;
  }

  static fromJson(category: unknown): Category {
    const casted = category as Record<string, unknown>;

    return new Category({
      id: casted['id'] as number,
      name: casted['name'] as string,
      code: casted['code'] as string,
      description: casted['description'] as string,
      channel: casted['channel'] as Channel,
      isActive: casted['isActive'] as boolean,
      status: casted['status'] as Status,
    });
  }

  static toJson(category: Category): Category {
    return {
      code: category.code,
      name: category.name,
      description: category.description,
      channel: category.channel,
      isActive: category.isActive,
      status: category.isActive ? Status.ACTIVE : Status.INACTIVE,
    };
  }
}
