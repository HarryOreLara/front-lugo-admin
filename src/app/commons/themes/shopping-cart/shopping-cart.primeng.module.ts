import { NgModule } from '@angular/core';

import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  exports: [
    StyleClassModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    MultiSelectModule,
    TagModule,
    DividerModule,
    InputNumberModule,
  ],
})
export class ShoppingCartPrimengModule {}
