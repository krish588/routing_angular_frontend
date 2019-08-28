import { TestBed } from '@angular/core/testing';

import { ServiceProviderProfileServiceService } from './service-provider-profile-service.service';

describe('ServiceProviderProfileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceProviderProfileServiceService = TestBed.get(ServiceProviderProfileServiceService);
    expect(service).toBeTruthy();
  });
});
