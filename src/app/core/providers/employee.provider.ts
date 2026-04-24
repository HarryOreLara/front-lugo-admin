import { Provider } from "@angular/core";
import { EmployeeRepositoryImpl } from "@patterns//infrastructure/employee.repository.impl";
import { EMPLOYEE_REPOSITORY } from "src/app/commons/tokens/employee.token";

export const EMPLOYEE_PROVIDER: Array<Provider> = [
  {
    provide: EMPLOYEE_REPOSITORY,
    useClass: EmployeeRepositoryImpl,
  },
];
