// core/guards/auth.guard.ts
import { inject }           from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStateService } from '@states/lugo-state/auth-state.service';
import { filter, map, switchMap, take } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authState = inject(AuthStateService);
  const router    = inject(Router);

  return authState.isInitialized$.pipe(
    filter(initialized => initialized === true),
    take(1),
    switchMap(() =>
      authState.isLoggedIn$.pipe(
        take(1),
        map(isLoggedIn => {
          if (isLoggedIn) return true;
          router.navigate(['/']);
          return false;
        }),
      ),
    ),
  );
};