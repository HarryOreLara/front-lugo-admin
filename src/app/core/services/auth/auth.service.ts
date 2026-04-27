import { Inject, Injectable } from '@angular/core';
import { ILoginRequest } from '@pages/auth/login/models/login-request.model';
import { AuthRepository } from '@patterns//repository/auth.repository';
import { AUTH_REPOSITORY } from 'src/app/commons/tokens/auth.token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(
    @Inject(AUTH_REPOSITORY)
    private readonly authRespository: AuthRepository,
  ) {}



  login(loginRequest: ILoginRequest){}



  logout(){}


}
