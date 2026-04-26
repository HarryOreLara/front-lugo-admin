import { Status } from '@enums/status.enum';
import { IEmployeeForm } from '../models/employee-form.model';
import { IEmployeeRequest } from '../models/employee-request.model';

export const createEmployeeMapper = (
  employeeForm: IEmployeeForm,
): IEmployeeRequest => {
  return {
    firstName: employeeForm.firstName,
    lastName: employeeForm.lastName,
    email: employeeForm.email,
    phone: employeeForm.phone,
    role: employeeForm.role,
    isActive: employeeForm.isActive,
    typeDocument: employeeForm.typeDocument,
    document: employeeForm.document,
    postalCode: employeeForm.postalCode,
    address: employeeForm.address,
    status: employeeForm.isActive ? Status.ACTIVE : Status.INACTIVE,
    districtId: employeeForm.district,
    bankId: employeeForm.bank,
  } as IEmployeeRequest;
};
