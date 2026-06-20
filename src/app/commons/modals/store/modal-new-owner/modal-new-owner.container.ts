import { Component, OnDestroy } from '@angular/core';
import { ModalService } from '@components//host/app-modal.service';
import { DOCUMENTS_TYPE } from '@constants/document-type.constant';
import { EMPLOYEE_ROLES } from '@constants/employee-role.constant';
import { IParameterEnum } from '@interfaces/index';
import { Parameter } from '@interfaces/parameter/parameter.interface';
import { Subject, takeUntil } from 'rxjs';
import { IOwnerForm } from './model/owner-form.model';
import { EmployeeRole } from '@enums/employee-role.enum';
import { EmployeeFacade } from '@patterns//facade/employee.facade';
import { OwnerFacade } from '@patterns//facade/owner.facade';

@Component({
  selector: 'app-modal-new-owner',
  templateUrl: './modal-new-owner.container.html',
})
export class ModalNewOwnerContainer implements OnDestroy {
  public visibleModal: boolean = true;
  private destroy$ = new Subject<void>();
  public banks: Array<Parameter>;
  public districts: Array<Parameter>;
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public documentsType: IParameterEnum[] = DOCUMENTS_TYPE;
  public employeeRoles: IParameterEnum[] = EMPLOYEE_ROLES.filter(
    (x) => x.id == EmployeeRole.OWNER || x.id == EmployeeRole.SUPER_ADMIN,
  );

  public constructor(
    private readonly ownerFacade: OwnerFacade,
    private readonly modalService: ModalService,
  ) {
    this.isLoading$ = ownerFacade.loading$;
  }

  public saveOwner(owner: IOwnerForm) {
    console.log({
      owner,
    });
    this.ownerFacade.saveOwnerFc(owner);

    this.ownerFacade.closeModal$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.close();
      });
  }

  public close() {
    this.modalService.close();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
