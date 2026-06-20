import { EmployeeRole } from "@enums/employee-role.enum";
import { Status } from "@enums/status.enum";

export interface IOwnerForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: EmployeeRole;
  isActive: boolean;
  typeDocument: DocumentType;
  document: string;
  address: string;
  postalCode: string;
  status: Status;
  district: number;
  bank: number;
}
