import { TestBed } from '@angular/core/testing';

import { ServiceprovidersService } from './serviceproviders.service';

describe('ServiceprovidersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceprovidersService = TestBed.get(ServiceprovidersService);
    expect(service).toBeTruthy();
  });
});
