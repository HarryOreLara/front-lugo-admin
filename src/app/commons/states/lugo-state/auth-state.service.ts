
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs';
import { LugoStateService } from './lugo-state.service';
import { STATE_KEYS } from '@constants/state-keys.constant';
import { User } from '@class/auth/user.class';

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  constructor(private lugoState: LugoStateService) {}

  readonly currentUser$ = this.lugoState.get<User | null>(STATE_KEYS.USER);
  readonly isLoggedIn$ = this.currentUser$.pipe(map((u) => u !== null));
  readonly isInitialized$ = this.lugoState.get<boolean>(STATE_KEYS.INITIALIZED);

  setUser(user: User): void {
    this.lugoState.set(STATE_KEYS.USER, user);
  }

  clearUser(): void {
    this.lugoState.set(STATE_KEYS.USER, null);
  }

  markAsInitialized(): void {
    this.lugoState.set(STATE_KEYS.INITIALIZED, true);
  }

  getUser(): User | null {
    return this.lugoState.getSnapshot<User>(STATE_KEYS.USER);
  }
}
