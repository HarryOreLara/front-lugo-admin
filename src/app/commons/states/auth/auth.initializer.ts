// auth.initializer.ts
import { inject } from '@angular/core';
import { AuthService } from '@service/auth/auth.service';
import { LugoStateService } from '@states/lugo-state/lugo-state.service';
import { catchError, EMPTY, tap } from 'rxjs';

export function authInitializer() {
  const authService = inject(AuthService);
  const lugoState = inject(LugoStateService);

  return () =>
    authService.me().pipe(
      tap((user) => lugoState.set('user-state', user)),
      catchError(() => EMPTY),
    );
}
