import { Inject, Injectable } from '@angular/core';
import { User } from '@class/auth/user.class';
import { ILoginRequest } from '@pages/auth/login/models/login-request.model';
import { AuthRepository } from '@patterns//repository/auth.repository';
import { Observable } from 'rxjs';
import { AUTH_REPOSITORY } from 'src/app/commons/tokens/auth.token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(
    @Inject(AUTH_REPOSITORY)
    private readonly authRespository: AuthRepository,
  ) {}

  login(loginRequest: ILoginRequest): Observable<User> {
    return this.authRespository.login(loginRequest);
  }

  logout(): Observable<void> {
    return this.authRespository.logout();
  }

  me(): Observable<User> {
    return this.authRespository.me();
  }
}
