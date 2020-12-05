import { TestBed } from '@angular/core/testing';

import { CuchillosCarritoService } from './cuchillos-carrito.service';

describe('CuchillosCarritoService', () => {
  let service: CuchillosCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuchillosCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
