import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandTableListComponent } from './brand-table-list.component';

describe('BrandTableListComponent', () => {
  let component: BrandTableListComponent;
  let fixture: ComponentFixture<BrandTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandTableListComponent]
    });
    fixture = TestBed.createComponent(BrandTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
