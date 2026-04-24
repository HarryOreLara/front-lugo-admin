import { Status } from '@enums/status.enum';
import { Province } from './province.class';

export class District {
  public id: number;
  public name: string;
  public ubigeo: string;
  public isActive: boolean;
  public status: Status;
  public createdAt: Date;
  public province: Province;

  public constructor(district: Partial<District> = {}) {
    this.id = district.id ?? 0;
    this.name = district.name ?? '';
    this.ubigeo = district.ubigeo ?? '';
    this.isActive = district.isActive ?? true;
    this.status = district.status ?? Status.ACTIVE;
    this.createdAt = district.createdAt ?? new Date();
    this.province = district.province ?? new Province();
  }

  static fromJson(district: unknown): District {
    const casted = district as Record<string, unknown>;

    return new District({
      id: casted['id'] as number,
      name: casted['name'] as string,
      ubigeo: casted['ubigeo'] as string,
      isActive: casted['isActive'] as boolean,
      status: casted['status'] as Status,
      createdAt: casted['createdAt'] as Date,
      province: casted['province']
        ? Province.fromJson(casted['province'])
        : new Province(),
    });
  }
}
