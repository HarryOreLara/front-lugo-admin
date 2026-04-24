import { District } from '@class/location/district.class';
import { Bank } from '@class/transaction/bank.class';
import { Channel } from '@enums/channel.enum';
import { DocumentType } from '@enums/document-type.enum';
import { EmployeeRole } from '@enums/employee-role.enum';
import { Status } from '@enums/status.enum';

export class Employee {
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

  public constructor(employee: Partial<Employee> = {}) {
    this.id = employee.id ?? 0;
    this.firstName = employee.firstName ?? '';
    this.lastName = employee.lastName ?? '';
    this.email = employee.email ?? '';
    this.code = employee.code ?? '';
    this.phone = employee.phone ?? '';
    this.role = employee.role ?? EmployeeRole.CASHIER;
    this.isActive = employee.isActive ?? true;
    this.typeDocument = employee.typeDocument ?? DocumentType.DNI;
    this.document = employee.document ?? '';
    this.address = employee.address ?? '';
    this.postalCode = employee.postalCode ?? '';
    this.channel = employee.channel ?? Channel.PHYSICAL;
    this.status = employee.status ?? Status.ACTIVE;
    this.district = employee.district ?? new District();
    this.bank = employee.bank ?? new Bank();
    this.createdAt = employee.createdAt ?? new Date();
  }

  static fromJson(purchaseItem: unknown): Employee {
    const casted = purchaseItem as Record<string, unknown>;

    return new Employee({
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
