import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartModule } from 'primeng/chart';
import { AlertService } from '@service/alert.service';
import { CustomErrorService } from '@service/custom_error.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
  ],
  providers: [MessageService, AlertService, CustomErrorService],
})
export class DashboardModule {}
