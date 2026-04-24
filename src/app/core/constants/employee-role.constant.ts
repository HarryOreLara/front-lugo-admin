import { EmployeeRole } from '@enums/employee-role.enum';
import { IParameterEnum } from '@interfaces/index';

export const EMPLOYEE_ROLES: Array<IParameterEnum> = [
  {
    id: EmployeeRole.ADMIN,
    name: 'Administrador',
  },
  {
    id: EmployeeRole.CASHIER,
    name: 'Cajero',
  },
  {
    id: EmployeeRole.SELLER,
    name: 'Proveedor',
  },
  {
    id: EmployeeRole.WAREHOUSE,
    name: 'Almacenero',
  },
];
