import { User } from '@class/auth/user.class';
import { Observable } from 'rxjs';

export interface AuthRepository {
  login(username: string, password: string): Observable<User>;
  logout(username: string): Observable<User>;
//   register(): Observable<User>;
}
