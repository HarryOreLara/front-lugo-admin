import { District } from '@class/location/district.class';
import { Bank } from '@class/transaction/bank.class';
import { Channel } from '@enums/channel.enum';
import { DocumentType } from '@enums/document-type.enum';
import { EmployeeRole } from '@enums/employee-role.enum';
import { Status } from '@enums/status.enum';

export class Owner {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public code: string;
  public phone: string;
  public role: EmployeeRole;
  public isActive: boolean;
  public typeDocument: DocumentType;
  public document: string;
  public address: string;
  public postalCode: string;
  public channel: Channel;
  public status: Status;
  public district: District;
  public bank: Bank;
  public createdAt: Date;

  public constructor(owner: Partial<Owner> = {}) {
    this.id = owner.id ?? 0;
    this.firstName = owner.firstName ?? '';
    this.lastName = owner.lastName ?? '';
    this.email = owner.email ?? '';
    this.code = owner.code ?? '';
    this.phone = owner.phone ?? '';
    this.role = owner.role ?? EmployeeRole.CASHIER;
    this.isActive = owner.isActive ?? true;
    this.typeDocument = owner.typeDocument ?? DocumentType.DNI;
    this.document = owner.document ?? '';
    this.address = owner.address ?? '';
    this.postalCode = owner.postalCode ?? '';
    this.channel = owner.channel ?? Channel.PHYSICAL;
    this.status = owner.status ?? Status.ACTIVE;
    this.district = owner.district ?? new District();
    this.bank = owner.bank ?? new Bank();
    this.createdAt = owner.createdAt ?? new Date();
  }

  static fromJson(owner: unknown): Owner {
    const casted = owner as Record<string, unknown>;

    return new Owner({
      id: casted['id'] as number,
      firstName: casted['firstName'] as string,
      lastName: casted['lastName'] as string,
      email: casted['email'] as string,
      code: casted['code'] as string,
      phone: casted['phone'] as string,
      role: casted['role'] as EmployeeRole,
      isActive: casted['isActive'] as boolean,
      typeDocument: casted['typeDocument'] as DocumentType,
      document: casted['document'] as string,
      address: casted['address'] as string,
      postalCode: casted['postalCode'] as string,
      channel: casted['channel'] as Channel,
      status: casted['status'] as Status,
      district: casted['district']
        ? District.fromJson(casted['district'])
        : new District(),
      bank: casted['bank'] ? Bank.fromJson(casted['bank']) : new Bank(),
      createdAt: casted['createdAt'] as Date,
    });
  }
}
