import { Injectable } from '@angular/core';
import { EmployeeRepository } from '../repository/employee.repository';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '@class/employee/employee.class';
import { map, Observable } from 'rxjs';
import { IEmployeeRequest } from 'src/app/commons/modals/employee/modal-new-employee/models/employee-request.model';
import {
  IGeneric,
  IGenericArrays,
} from '@interfaces/genericas/IGeneric.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeRepositoryImpl implements EmployeeRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  getAllEmployee(page: number, size: number): Observable<Employee[]> {
    const direction = `${this.apiUrl}/employee/getAllEmployee`;

    return this.http
      .get<IGenericArrays<Employee[]>>(direction)
      .pipe(
        map((response: IGenericArrays<Employee[]>) =>
          response.data.map((employee) => Employee.fromJson(employee)),
        ),
      );
  }
  findEmployeeById(id: number): Observable<Employee> {
    const direction = `${this.apiUrl}/employee/getOneEmployee`;

    return this.http
      .get<IGeneric<Employee>>(direction, { params: { id } })
      .pipe(
        map((response: IGeneric<Employee>) => Employee.fromJson(response.data)),
      );
  }
  createEmployee(employee: IEmployeeRequest): Observable<Employee> {
    const direction = `${this.apiUrl}/employee/createEmployee`;

    return this.http
      .post<IGeneric<Employee>>(direction, employee)
      .pipe(
        map((response: IGeneric<Employee>) => Employee.fromJson(response.data)),
      );
  }
  updateEmployee(id: number, employee: IEmployeeRequest): Observable<Employee> {
    const direction = `${this.apiUrl}/employee/updateEmployee`;

    return this.http
      .patch<IGeneric<Employee>>(direction, employee, { params: { id } })
      .pipe(
        map((response: IGeneric<Employee>) => Employee.fromJson(response.data)),
      );
  }
  deleteEmployee(id: number): Observable<Employee> {
    throw new Error('Method not implemented.');
  }
}
