import { Channel } from '@enums/channel.enum';
import { DocumentType } from '@enums/document-type.enum';
import { Status } from '@enums/status.enum';

export class Client {
  public id: number;
  public typeDocument: DocumentType;
  public document: string;
  public email: string;
  public phone: string;
  public firstName: string;
  public lastName: string;
  public address: string;
  public postalCode: string;
  public channel: Channel;
  public createdAt: Date;
  public updatedAt: Date;
  public isActive: boolean;
  public status: Status;

  public constructor(client: Partial<Client> = {}) {
    this.id = client.id ?? 0;
    this.typeDocument = client.typeDocument ?? DocumentType.DNI;
    this.document = client.document ?? '';
    this.email = client.email ?? '';
    this.phone = client.phone ?? '';
    this.firstName = client.firstName ?? '';
    this.lastName = client.lastName ?? '';
    this.address = client.address ?? '';
    this.postalCode = client.postalCode ?? '';
    this.channel = client.channel ?? Channel.PHYSICAL;
    this.createdAt = client.createdAt ?? new Date();
    this.updatedAt = client.updatedAt ?? new Date();
    this.isActive = client.isActive ?? true;
    this.status = client.status ?? Status.ACTIVE;
  }

  static fromJson(client: unknown): Client {

    console.log({client});
    const casted = client as Record<string, unknown>;

    return new Client({
      id: casted['id'] as number,
      typeDocument: casted['typeDocument'] as DocumentType,
      document: casted['document'] as string,
      email: casted['email'] as string,
      phone: casted['phone'] as string,
      firstName: casted['firstName'] as string,
      lastName: casted['lastName'] as string,
      address: casted['address'] as string,
      postalCode: casted['postalCode'] as string,
      channel: casted['channel'] as Channel,
      createdAt: new Date(casted['createdAt'] as Date),
      updatedAt: new Date(casted['updatedAt'] as Date),
      isActive: casted['isActive'] as boolean,
      status: casted['status'] as Status,
    });
  }
}
