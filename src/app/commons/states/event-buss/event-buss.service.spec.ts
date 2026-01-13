import { TestBed } from '@angular/core/testing';

import { EventBussService } from './event-buss.service';

describe('EventBussService', () => {
  let service: EventBussService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventBussService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
