import { Component, Input } from '@angular/core';
import { IParameterEnum } from '@interfaces/index';

@Component({
  selector: 'app-roles-ui',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent {
  @Input() public employeeRoles: IParameterEnum[];
}
