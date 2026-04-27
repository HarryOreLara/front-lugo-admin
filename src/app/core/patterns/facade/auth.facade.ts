import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { createLoginMapper } from '@pages/auth/login/mappers/login.mapper';
import { ILoginForm } from '@pages/auth/login/models/login-form.model';
import { AuthService } from '@service/auth/auth.service';
import { AuthStateService } from '@states/lugo-state/auth-state.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade implements OnDestroy {
  loading$ = new BehaviorSubject<boolean>(false);
  closeModal$ = new Subject<void>();
  error$ = new BehaviorSubject<string | null>(null);
  private destroy$ = new Subject<void>();

  public constructor(
    private readonly authService: AuthService,
    private readonly authState: AuthStateService,
    private readonly router: Router,
  ) {}

  loginFacade(loginForm: ILoginForm): void {
    const loginMapper = createLoginMapper(loginForm);
    this.loading$.next(true);
    this.error$.next(null);

    this.authService.login(loginMapper).subscribe({
      next: (user) => {
        this.authState.setUser(user);
        this.loading$.next(false);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.error$.next(err.error?.message ?? 'Error al iniciar sesión');
        this.loading$.next(false);
      },
    });
  }

  logoutFacade(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.authState.clearUser();
        this.router.navigate(['/']);
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
