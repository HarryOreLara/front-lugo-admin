import { InjectionToken } from '@angular/core';
import { EmployeeRepository } from '@patterns//repository/employee.repository';

export const EMPLOYEE_REPOSITORY = new InjectionToken<EmployeeRepository>(
  'EmployeeRepository',
);
