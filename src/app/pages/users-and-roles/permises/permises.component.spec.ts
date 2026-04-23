import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisesComponent } from './permises.component';

describe('PermisesComponent', () => {
  let component: PermisesComponent;
  let fixture: ComponentFixture<PermisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermisesComponent]
    });
    fixture = TestBed.createComponent(PermisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
