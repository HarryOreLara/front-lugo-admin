import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanancyComponent } from './ganancy.component';

describe('GanancyComponent', () => {
  let component: GanancyComponent;
  let fixture: ComponentFixture<GanancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanancyComponent]
    });
    fixture = TestBed.createComponent(GanancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
