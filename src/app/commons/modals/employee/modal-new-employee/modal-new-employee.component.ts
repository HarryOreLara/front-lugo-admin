import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '@class/employee/employee.class';
import { EmployeeFormPresenter } from './employee.form.presenter';
import { IEmployeeForm } from './models/employee-form.model';
import { Parameter } from '@interfaces/parameter/parameter.interface';
import { IParameterEnum } from '@interfaces/index';

@Component({
  selector: 'app-modal-new-employee-ui',
  templateUrl: './modal-new-employee.component.html',
  styleUrls: ['./modal-new-employee.component.css'],
})
export class ModalNewEmployeeComponent implements OnInit {
  @Input() public visibleModal: boolean;
  @Input() employee: Employee;
  @Input() public documentsType: IParameterEnum[];
  @Input() public employeeRoles: IParameterEnum[];
  @Input() public isLoading: boolean;
  @Input() public banks: Array<Parameter>;
  @Input() public districts: Array<Parameter>;
  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveEmployeeEmit: EventEmitter<IEmployeeForm> =
    new EventEmitter<IEmployeeForm>();
  @Output() updateEmployeeEmit: EventEmitter<{
    product: IEmployeeForm;
    id: number;
  }> = new EventEmitter<{ product: IEmployeeForm; id: number }>();
  public constructor(
    public readonly employeeFormPresenter: EmployeeFormPresenter,
  ) {
    this.createControls();
  }

  public ngOnInit(): void {}

  public saveEmployee() {
    this.saveEmployeeEmit.emit(this.employeeFormPresenter.Form.getRawValue());
  }

  public updateEmployee() {
    this.updateEmployeeEmit.emit({
      product: this.employeeFormPresenter.Form.getRawValue(),
      id: this.employee.id,
    });
  }

  public close() {
    this.closeEmit.emit();
  }

  private createControls() {
    this.employeeFormPresenter.initForm();
    this.employeeFormPresenter.createForm();
  }
}
