import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';
import { EmployeeFacade } from '@patterns//facade/employee.facade';
import { Subject, takeUntil } from 'rxjs';
import { IEmployeeForm } from './models/employee-form.model';
import { LugoStateService } from '@states/lugo-state/lugo-state.service';
import { ParameterNode } from '@enums/parameters.enum';
import { Parameter } from '@interfaces/parameter/parameter.interface';
import { IParameterEnum } from '@interfaces/index';
import { DOCUMENTS_TYPE } from '@constants/document-type.constant';
import { EMPLOYEE_ROLES } from '@constants/employee-role.constant';

@Component({
  selector: 'app-modal-new-employee',
  templateUrl: './modal-new-employee.container.html',
})
export class ModalNewEmployeeContainer implements OnInit, OnDestroy {
  public visibleModal: boolean = true;
  private destroy$ = new Subject<void>();
  public banks: Array<Parameter>;
  public districts: Array<Parameter>;
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public documentsType: IParameterEnum[] = DOCUMENTS_TYPE;
  public employeeRoles: IParameterEnum[] = EMPLOYEE_ROLES;

  public constructor(
    private readonly employeeFacade: EmployeeFacade,
    private readonly modalService: ModalService,
    private readonly lugoStateService: LugoStateService,
  ) {
    this.isLoading$ = employeeFacade.loading$;
  }

  ngOnInit(): void {
    this.initParameters();
  }

  public saveEmployee(employee: IEmployeeForm) {
    this.employeeFacade.saveEmployeeFc(employee);

    this.employeeFacade.closeModal$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.close();
      });

  }

  public close() {
    this.modalService.close();
  }

  private initParameters(): void {
    this.banks =
      this.lugoStateService.getSnapshot<Array<Parameter>>(
        ParameterNode.BANKS,
      ) ?? [];

    this.districts =
      this.lugoStateService.getSnapshot<Array<Parameter>>(
        ParameterNode.DISTRICTS,
      ) ?? [];
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
