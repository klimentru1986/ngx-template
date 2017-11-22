import { TestBed, inject } from '@angular/core/testing';

import { HttpComponentInteropService } from './http-component-interop.service';

describe('HttpComponentInteropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpComponentInteropService]
    });
  });

  it('should be created', inject([HttpComponentInteropService], (service: HttpComponentInteropService) => {
    expect(service).toBeTruthy();
  }));
});
