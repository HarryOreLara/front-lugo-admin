import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { StyleClassModule } from 'primeng/styleclass';
import { TagModule } from 'primeng/tag';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  exports: [
    StyleClassModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    TagModule,
    DividerModule,
    InputNumberModule,
    AvatarGroupModule,
    AvatarModule,
    CheckboxModule,
  ],
})
export class AuthPrimengModule {}
