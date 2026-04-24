import { Employee } from '@class/employee/employee.class';
import { Channel } from '@enums/channel.enum';
import { Observable } from 'rxjs';
import { IEmployeeRequest } from 'src/app/commons/modals/employee/modal-new-employee/models/employee-request.model';

export interface EmployeeRepository {
  getAllEmployee(page: number, size: number): Observable<Employee[]>;
  findEmployeeById(id: number): Observable<Employee>;
  createEmployee(employee: IEmployeeRequest): Observable<Employee>;
  updateEmployee(id: number, employee: IEmployeeRequest): Observable<Employee>;
  deleteEmployee(id: number): Observable<Employee>;
}
