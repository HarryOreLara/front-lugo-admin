import { Status } from '@enums/status.enum';
import { Departament } from './departament.class';

export class Province {
  public id: number;
  public name: string;
  public ubigeo: string;
  public isActive: boolean;
  public status: Status;
  public createdAt: Date;
  public departament: Departament;

  public constructor(province: Partial<Province> = {}) {
    this.id = province.id ?? 0;
    this.name = province.name ?? '';
    this.ubigeo = province.ubigeo ?? '';
    this.isActive = province.isActive ?? true;
    this.status = province.status ?? Status.ACTIVE;
    this.createdAt = province.createdAt ?? new Date();
    this.departament = province.departament ?? new Departament();
  }

  static fromJson(province: unknown): Province {
    const casted = province as Record<string, unknown>;

    return new Province({
      id: casted['id'] as number,
      name: casted['name'] as string,
      ubigeo: casted['ubigeo'] as string,
      isActive: casted['isActive'] as boolean,
      status: casted['status'] as Status,
      createdAt: casted['createdAt'] as Date,
      departament: casted['departament']
        ? Departament.fromJson(casted['departament'])
        : new Departament(),
    });
  }
}
