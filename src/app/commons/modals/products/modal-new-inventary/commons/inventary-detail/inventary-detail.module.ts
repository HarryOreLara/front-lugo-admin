import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventaryDetailComponent } from './inventary-detail.component';
import { InventaryDetailContainer } from './inventary-detail.container';
import { InventaryPrimengModule } from '@themes/inventary/inventary.primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InventaryDetailComponent, InventaryDetailContainer],
  imports: [CommonModule, InventaryPrimengModule, ReactiveFormsModule],
  exports: [InventaryDetailContainer],
})
export class InventaryDetailModule {}
