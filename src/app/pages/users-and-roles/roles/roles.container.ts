import { Component } from '@angular/core';
import { EMPLOYEE_ROLES } from '@constants/employee-role.constant';
import { IParameterEnum } from '@interfaces/index';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.container.html',
})
export class RolesContainer {
  public employeeRoles: IParameterEnum[] = EMPLOYEE_ROLES;
}
