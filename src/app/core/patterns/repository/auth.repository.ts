import { User } from '@class/auth/user.class';
import { ILoginRequest } from '@pages/auth/login/models/login-request.model';
import { Observable } from 'rxjs';

export interface AuthRepository {
  login(loginRequest: ILoginRequest): Observable<User>;
  logout(): Observable<void>;
  me(): Observable<User>;
}
