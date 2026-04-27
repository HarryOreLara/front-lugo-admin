import { Injectable, OnDestroy } from '@angular/core';
import { createLoginMapper } from '@pages/auth/login/mappers/login.mapper';
import { ILoginForm } from '@pages/auth/login/models/login-form.model';
import { AuthService } from '@service/auth/auth.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade implements OnDestroy {
  loading$ = new BehaviorSubject<boolean>(false);
  closeModal$ = new Subject<void>();
  private destroy$ = new Subject<void>();

  public constructor(private readonly authService: AuthService) {}

  public loginFacade(loginForm: ILoginForm) {
    const loginMapper = createLoginMapper(loginForm);

    this.loading$.next(true);

    this.authService.login(loginMapper);
  }

  public logoutFacade() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
