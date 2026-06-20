import { Injectable } from '@angular/core';
import { OwnerRepository } from '../repository/owner.repository';
import { Owner } from '@class/owner/owner.class';
import { map, Observable } from 'rxjs';
import { IOwnerRequest } from 'src/app/commons/modals/store/modal-new-owner/model/owner-request.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  IGeneric,
  IGenericArrays,
} from '@interfaces/genericas/IGeneric.interface';
import { EmployeeRole } from '@enums/employee-role.enum';
import { RequestType } from '@enums/request-type.enum';

@Injectable({
  providedIn: 'root',
})
export class OwnerRepositoryImpl implements OwnerRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  getAllOwner(page: number, size: number): Observable<Owner[]> {
    const direction = `${this.apiUrl}/employee/getAllEmployee`;

    return this.http
      .get<IGenericArrays<Owner[]>>(direction, {
        params: {
          requestType: RequestType.ONLY_OWNER,
        },
      })
      .pipe(
        map((response: IGenericArrays<Owner[]>) =>
          response.data.map((employee) => Owner.fromJson(employee)),
        ),
      );
  }
  findOwnerById(id: number): Observable<Owner> {
    const direction = `${this.apiUrl}/employee/getOneEmployee`;

    return this.http
      .get<IGeneric<Owner>>(direction, { params: { id } })
      .pipe(map((response: IGeneric<Owner>) => Owner.fromJson(response.data)));
  }
  createOwner(owner: IOwnerRequest): Observable<Owner> {
    const direction = `${this.apiUrl}/employee/createEmployee`;

    return this.http
      .post<IGeneric<Owner>>(direction, owner)
      .pipe(map((response: IGeneric<Owner>) => Owner.fromJson(response.data)));
  }
}
