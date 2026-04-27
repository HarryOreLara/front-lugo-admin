import { Injectable } from '@angular/core';
import { AuthRepository } from '../repository/auth.repository';
import { User } from '@class/auth/user.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthRepositoryImpl implements AuthRepository {
  login(username: string, password: string): Observable<User> {
    throw new Error('Method not implemented.');
  }
  logout(username: string): Observable<User> {
    throw new Error('Method not implemented.');
  }
}
