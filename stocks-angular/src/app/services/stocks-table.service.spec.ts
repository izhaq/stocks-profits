import { TestBed } from '@angular/core/testing';

import { StocksTableService } from './stocks-table.service';

describe('StocksTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StocksTableService = TestBed.get(StocksTableService);
    expect(service).toBeTruthy();
  });
});
