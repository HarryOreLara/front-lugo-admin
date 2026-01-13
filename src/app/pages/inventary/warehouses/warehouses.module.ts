import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehousesComponent } from './warehouses.component';
import { WarehousesRoutingModule } from './warehouses-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WarehousesComponent
  ],
  imports: [
    CommonModule,
    WarehousesRoutingModule,
    FormsModule,
    
  ]
})
export class WarehousesModule { }
