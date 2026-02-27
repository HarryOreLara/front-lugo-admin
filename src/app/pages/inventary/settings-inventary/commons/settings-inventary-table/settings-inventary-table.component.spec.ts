import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsInventaryTableComponent } from './settings-inventary-table.component';

describe('SettingsInventaryTableComponent', () => {
  let component: SettingsInventaryTableComponent;
  let fixture: ComponentFixture<SettingsInventaryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsInventaryTableComponent]
    });
    fixture = TestBed.createComponent(SettingsInventaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
