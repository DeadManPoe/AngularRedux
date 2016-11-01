/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeadersMiddlewareService } from './headers-middleware.service';

describe('Service: HeadersMiddleware', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadersMiddlewareService]
    });
  });

  it('should ...', inject([HeadersMiddlewareService], (service: HeadersMiddlewareService) => {
    expect(service).toBeTruthy();
  }));
});
