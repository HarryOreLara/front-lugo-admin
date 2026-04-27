// auth.initializer.ts
import { inject } from '@angular/core';
import { AuthService } from '@service/auth/auth.service';
import { AuthStateService } from '@states/lugo-state/auth-state.service';
import { catchError, EMPTY, finalize, tap } from 'rxjs';

export function authInitializer() {
  const authService = inject(AuthService);
  const authState   = inject(AuthStateService);

  return () =>
    authService.me().pipe(
      tap(user  => authState.setUser(user)),
      catchError(() => EMPTY),
      finalize(() => authState.markAsInitialized()),
    );
}