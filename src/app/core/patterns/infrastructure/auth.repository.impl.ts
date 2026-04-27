import { Injectable } from '@angular/core';
import { AuthRepository } from '../repository/auth.repository';
import { User } from '@class/auth/user.class';
import { map, Observable } from 'rxjs';
import { ILoginRequest } from '@pages/auth/login/models/login-request.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { IGeneric } from '@interfaces/genericas/IGeneric.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthRepositoryImpl implements AuthRepository {
  private apiUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  logout(): Observable<void> {
    const direction = `${this.apiUrl}/auth/logout`;

    return this.http.post<void>(direction, {});
  }

  me(): Observable<User> {
    const direction = `${this.apiUrl}/auth/me`;

    return this.http
      .get<IGeneric<User>>(direction)
      .pipe(map((response: IGeneric<User>) => User.fromJson(response.data)));
  }

  login(loginRequest: ILoginRequest): Observable<User> {
    const direction = `${this.apiUrl}/auth/login`;

    return this.http
      .post<IGeneric<User>>(direction, loginRequest)
      .pipe(map((response: IGeneric<User>) => User.fromJson(response.data)));
  }
}
