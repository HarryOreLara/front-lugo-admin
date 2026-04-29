import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandHeaderInfoComponent } from './brand-header-info.component';

describe('BrandHeaderInfoComponent', () => {
  let component: BrandHeaderInfoComponent;
  let fixture: ComponentFixture<BrandHeaderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandHeaderInfoComponent]
    });
    fixture = TestBed.createComponent(BrandHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
