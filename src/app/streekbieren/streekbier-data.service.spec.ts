import { TestBed } from '@angular/core/testing';

import { StreekbierDataService } from './streekbier-data.service';

describe('StreekbierDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreekbierDataService = TestBed.get(StreekbierDataService);
    expect(service).toBeTruthy();
  });
});
