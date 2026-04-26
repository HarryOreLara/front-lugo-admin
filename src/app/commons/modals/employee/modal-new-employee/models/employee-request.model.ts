import { DocumentType } from '@enums/document-type.enum';
import { EmployeeRole } from '@enums/employee-role.enum';
import { Status } from '@enums/status.enum';

export interface IEmployeeRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: EmployeeRole;
  isActive: boolean;
  typeDocument: DocumentType;
  document: string;
  postalCode: string;
  address: string;
  status: Status;
  districtId: number;
  bankId: number;
}
