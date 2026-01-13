import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutComponent } from './app.layout.component';
import { RouterModule } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';


@NgModule({
  declarations: [
    AppLayoutComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // SharedAuthModule,
    RippleModule,
    StyleClassModule,
    SelectButtonModule,
    ButtonModule,
    RouterModule,
    BadgeModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    
  ],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
