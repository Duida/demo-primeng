import { TestBed } from '@angular/core/testing';

import { CarservicesService } from './carservices.service';

describe('CarservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarservicesService = TestBed.get(CarservicesService);
    expect(service).toBeTruthy();
  });
});
