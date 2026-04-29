import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHeaderInfoComponent } from './category-header-info.component';

describe('CategoryHeaderInfoComponent', () => {
  let component: CategoryHeaderInfoComponent;
  let fixture: ComponentFixture<CategoryHeaderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryHeaderInfoComponent]
    });
    fixture = TestBed.createComponent(CategoryHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
