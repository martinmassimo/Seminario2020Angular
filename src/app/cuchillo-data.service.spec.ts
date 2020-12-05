import { TestBed } from '@angular/core/testing';

import { CuchilloDataService } from './cuchillo-data.service';

describe('CuchilloDataService', () => {
  let service: CuchilloDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuchilloDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
