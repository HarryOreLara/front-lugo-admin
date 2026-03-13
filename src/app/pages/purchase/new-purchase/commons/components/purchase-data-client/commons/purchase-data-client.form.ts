import { DocumentType } from '@enums/document-type.enum';

export interface IPurchaseDataClientForm {
  documentType: DocumentType;
  document: string;
}
