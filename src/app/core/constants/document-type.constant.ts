import { DocumentType } from '@enums/document-type.enum';
import { IParameterEnum } from '@interfaces/index';

export const DOCUMENTS_TYPE: Array<IParameterEnum> = [
  {
    id: DocumentType.DNI,
    name: 'Dni',
  },
  {
    id: DocumentType.RUC,
    name: 'Ruc',
  },
  {
    id: DocumentType.PASSPORT,
    name: 'Pasaporte',
  },
  {
    id: DocumentType.CE,
    name: 'Carnet de extranjeria',
  },
];
