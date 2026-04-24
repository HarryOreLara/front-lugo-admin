import { Component, OnInit } from '@angular/core';
import { Employee } from '@class/employee/employee.class';
import { EmployeeFacade } from '@patterns//facade/employee.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.container.html',
})
export class EmployeeContainer implements OnInit {
  employees$ = new BehaviorSubject<Employee[]>([]);

  constructor(private readonly employeeFacade: EmployeeFacade) {
    this.employees$ = employeeFacade.employees$;
  }

  public ngOnInit(): void {
    this.employeeFacade.getAllEmployees();
  }
}
