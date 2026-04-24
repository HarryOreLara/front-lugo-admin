import { Inject, Injectable } from '@angular/core';
import { Employee } from '@class/employee/employee.class';
import { EmployeeRepository } from '@patterns//repository/employee.repository';
import { Observable } from 'rxjs';
import { IEmployeeRequest } from 'src/app/commons/modals/employee/modal-new-employee/models/employee-request.model';
import { EMPLOYEE_REPOSITORY } from 'src/app/commons/tokens/employee.token';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: EmployeeRepository,
  ) {}

  getAllEmployee(): Observable<Employee[]> {
    return this.employeeRepository.getAllEmployee(1, 10);
  }

  findEmployeeById(id: number): Observable<Employee> {
    return this.employeeRepository.findEmployeeById(id);
  }

  createEmployee(product: IEmployeeRequest): Observable<Employee> {
    return this.employeeRepository.createEmployee(product);
  }

  updateEmployee(id: number, product: IEmployeeRequest): Observable<Employee> {
    return this.employeeRepository.updateEmployee(id, product);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.employeeRepository.deleteEmployee(id);
  }
}
