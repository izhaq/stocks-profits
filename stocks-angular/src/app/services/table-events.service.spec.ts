import { TestBed } from '@angular/core/testing';

import { TableEventsService } from './table-events.service';

describe('TableEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableEventsService = TestBed.get(TableEventsService);
    expect(service).toBeTruthy();
  });
});
