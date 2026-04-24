import { Status } from '@enums/status.enum';

export class Departament {
  public id: number;
  public name: string;
  public ubigeo: string;
  public isActive: boolean;
  public status: Status;
  public createdAt: Date;

  public constructor(departament: Partial<Departament> = {}) {
    this.id = departament.id ?? 0;
    this.name = departament.name ?? '';
    this.ubigeo = departament.ubigeo ?? '';
    this.isActive = departament.isActive ?? true;
    this.status = departament.status ?? Status.ACTIVE;
    this.createdAt = departament.createdAt ?? new Date();
  }

  static fromJson(departament: unknown): Departament {
    const casted = departament as Record<string, unknown>;

    return new Departament({
      id: casted['id'] as number,
      name: casted['name'] as string,
      ubigeo: casted['ubigeo'] as string,
      isActive: casted['isActive'] as boolean,
      status: casted['status'] as Status,
      createdAt: casted['createdAt'] as Date,
    });
  }
}
