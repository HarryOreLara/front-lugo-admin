import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHeaderInfoComponent } from './users-header-info.component';

describe('UsersHeaderInfoComponent', () => {
  let component: UsersHeaderInfoComponent;
  let fixture: ComponentFixture<UsersHeaderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersHeaderInfoComponent]
    });
    fixture = TestBed.createComponent(UsersHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
