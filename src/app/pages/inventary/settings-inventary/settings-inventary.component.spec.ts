import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsInventaryComponent } from './settings-inventary.component';

describe('SettingsInventaryComponent', () => {
  let component: SettingsInventaryComponent;
  let fixture: ComponentFixture<SettingsInventaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsInventaryComponent]
    });
    fixture = TestBed.createComponent(SettingsInventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
