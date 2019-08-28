import { TestBed } from '@angular/core/testing';

import { SpcardImplementationserviceService } from './spcard-implementationservice.service';

describe('SpcardImplementationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpcardImplementationserviceService = TestBed.get(SpcardImplementationserviceService);
    expect(service).toBeTruthy();
  });
});
