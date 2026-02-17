import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from '@components//layout/app.layout.module';
import { DashboardPrimengModule } from '@themes/dashboard/dashboard.primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNGConfig } from 'primeng/api';
import { ModalHostModule } from '@components//host/app-modal-host.module';
import { AlertHostModule } from '@components//alerts/app-alert-host.module';
import { DialogModule } from 'primeng/dialog';
import { ModalNewProductModule } from './commons/modals/products/modal-new-product/modal-new-product.module';
import { APP_PROVIDERS } from './core/providers/providers';
import { ModalNewCategoryModule } from './commons/modals/products/modal-new-category/modal-new-category.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './commons/interceptors/error-interceptor';
import {
  initParameters,
  ParameterService,
} from '@states/parameters/parameter.service';
import { LugoStateService } from '@states/lugo-state/lugo-state.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppLayoutModule,
    DashboardPrimengModule,
    ModalHostModule,
    AlertHostModule,
    ModalNewProductModule,
    ModalNewCategoryModule,
  ],
  providers: [
    PrimeNGConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initParameters,
      deps: [ParameterService, LugoStateService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    ...APP_PROVIDERS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
