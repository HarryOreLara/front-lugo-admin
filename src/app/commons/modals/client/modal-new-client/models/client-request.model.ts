import { DocumentType } from "@enums/document-type.enum";

export interface IClientRequest {
  typeDocument: DocumentType;
  document: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  isActive: string;
  channel: string;
  status: string;
}
