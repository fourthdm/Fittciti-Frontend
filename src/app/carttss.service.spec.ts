import { TestBed } from '@angular/core/testing';

import { CarttssService } from './carttss.service';

describe('CarttssService', () => {
  let service: CarttssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarttssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
