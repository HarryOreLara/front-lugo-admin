import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptGeneratorComponent } from './script-generator.component';
import { ScriptGeneratorContainer } from './script-generator.container';
import { ScriptGeneratorRoutingModule } from './script-generator-routing.module';
import { AutomationPrimengModule } from '@themes/automation/automation.primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScriptGeneratorComponent, ScriptGeneratorContainer],
  imports: [
    CommonModule,
    ScriptGeneratorRoutingModule,
    FormsModule,
    AutomationPrimengModule,
  ],
  exports: [ScriptGeneratorContainer],
})
export class ScriptGeneratorModule {}
