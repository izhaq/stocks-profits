import { TestBed } from '@angular/core/testing';

import { ChartsEventsService } from './charts-events.service';

describe('ChartsEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartsEventsService = TestBed.get(ChartsEventsService);
    expect(service).toBeTruthy();
  });
});
