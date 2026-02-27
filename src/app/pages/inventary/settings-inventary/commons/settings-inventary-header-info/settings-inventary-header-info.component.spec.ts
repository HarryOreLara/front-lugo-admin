import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsInventaryHeaderInfoComponent } from './settings-inventary-header-info.component';

describe('SettingsInventaryHeaderInfoComponent', () => {
  let component: SettingsInventaryHeaderInfoComponent;
  let fixture: ComponentFixture<SettingsInventaryHeaderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsInventaryHeaderInfoComponent]
    });
    fixture = TestBed.createComponent(SettingsInventaryHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
