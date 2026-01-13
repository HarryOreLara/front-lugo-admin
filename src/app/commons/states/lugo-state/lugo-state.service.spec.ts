import { TestBed } from '@angular/core/testing';

import { LugoStateService } from './lugo-state.service';

describe('LugoStateService', () => {
  let service: LugoStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LugoStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
