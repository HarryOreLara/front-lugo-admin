import { Component, Input } from '@angular/core';
import { Employee } from '@class/employee/employee.class';
import { ModalService } from '@components//host/app-modal.service';
import { MODELS_ENUM } from '@enums/models.enum';

@Component({
  selector: 'app-employee-table-list',
  templateUrl: './employee-table-list.container.html',
})
export class EmployeeTableListContainer {
  @Input() public employees: Employee[] = [];

  constructor(private readonly modalService: ModalService) {}

  public newEmployee() {
    console.log("EMISION");
    this.modalService.openByName(MODELS_ENUM.MODAL_NEW_EMPLOYEE, {});
  }
}
