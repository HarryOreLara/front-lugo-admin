import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertBussService } from '@components//alerts/app-buss-alert.service';
import { ALERTS_ENUM } from '@enums/alerts.enum';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router,
    private readonly alertBussService: AlertBussService, // o tu servicio de alertas
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 0:
            this.alertBussService.openByName(ALERTS_ENUM.SUCCESS, {});
            break;
          default:
            this.alertBussService.openByName(ALERTS_ENUM.ERROR, {});
        }

        return throwError(() => error);
      }),
    );
  }
}
