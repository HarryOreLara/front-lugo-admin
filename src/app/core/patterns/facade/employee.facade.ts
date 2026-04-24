import { Injectable } from '@angular/core';
import { Employee } from '@class/employee/employee.class';
import { EmployeeService } from '@service/employee/employee.service';
import { BehaviorSubject, finalize, Subject, takeUntil, tap } from 'rxjs';
import { IEmployeeForm } from 'src/app/commons/modals/employee/modal-new-employee/models/employee-form.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFacade {
  employees$ = new BehaviorSubject<Employee[]>([]);
  employee$ = new BehaviorSubject<Employee>(new Employee());
  loading$ = new BehaviorSubject<boolean>(false);
  closeModal$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  constructor(private readonly employeeService: EmployeeService) {}

  getAllEmployees() {
    this.employeeService
      .getAllEmployee()
      .subscribe((employees) => this.employees$.next(employees));
  }

  saveEmployeeFc(employeeForm: IEmployeeForm) {
    this.loading$.next(true);

    this.employeeService
      .createEmployee(employeeForm)
      .pipe(
        tap((response) => {
          this.employees$.next([response, ...this.employees$.value]);

          this.closeModal$.next();
        }),
        takeUntil(this.destroy$),
        finalize(() => {
          this.loading$.next(false);
        }),
      )
      .subscribe();
  }
}
