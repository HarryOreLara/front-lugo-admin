import { Injectable } from '@angular/core';
import { EmployeeRepository } from '../repository/employee.repository';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '@class/employee/employee.class';
import { Observable } from 'rxjs';
import { IEmployeeRequest } from 'src/app/commons/modals/employee/modal-new-employee/models/employee-request.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeRepositoryImpl implements EmployeeRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}
  getAllEmployee(page: number, size: number): Observable<Employee[]> {
    throw new Error('Method not implemented.');
  }
  findEmployeeById(id: number): Observable<Employee> {
    throw new Error('Method not implemented.');
  }
  createEmployee(employee: IEmployeeRequest): Observable<Employee> {
    throw new Error('Method not implemented.');
  }
  updateEmployee(id: number, Employee: IEmployeeRequest): Observable<Employee> {
    throw new Error('Method not implemented.');
  }
  deleteEmployee(id: number): Observable<Employee> {
    throw new Error('Method not implemented.');
  }
}
