import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptGeneratorComponent } from './script-generator.component';

describe('ScriptGeneratorComponent', () => {
  let component: ScriptGeneratorComponent;
  let fixture: ComponentFixture<ScriptGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScriptGeneratorComponent]
    });
    fixture = TestBed.createComponent(ScriptGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
