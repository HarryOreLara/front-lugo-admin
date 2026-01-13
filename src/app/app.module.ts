import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppLayoutModule,
    DashboardPrimengModule,
    ModalHostModule,
    AlertHostModule,
    ModalNewProductModule
  ],
  providers: [PrimeNGConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
