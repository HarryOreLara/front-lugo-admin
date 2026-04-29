import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableListComponent } from './users-table-list.component';

describe('UsersTableListComponent', () => {
  let component: UsersTableListComponent;
  let fixture: ComponentFixture<UsersTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersTableListComponent]
    });
    fixture = TestBed.createComponent(UsersTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
