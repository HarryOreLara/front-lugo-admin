import { Status } from '@enums/status.enum';

export class Bank {
  public id: number;
  public name: string;
  public description: string;
  public isActive: boolean;
  public status: Status;
  public createdAt: Date;

  public constructor(bank: Partial<Bank> = {}) {
    this.id = bank.id ?? 0;
    this.name = bank.name ?? '';
    this.description = bank.description ?? '';
    this.isActive = bank.isActive ?? true;
    this.status = bank.status ?? Status.ACTIVE;
    this.createdAt = bank.createdAt ?? new Date();
  }

  static fromJson(bank: unknown): Bank {
    const casted = bank as Record<string, unknown>;

    return new Bank({
      id: casted['id'] as number,
      name: casted['name'] as string,
      description: casted['description'] as string,
      isActive: casted['isActive'] as boolean,
      status: casted['status'] as Status,
      createdAt: casted['createdAt'] as Date,
    });
  }
}
