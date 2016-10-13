/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TryoutServiceService } from './tryout-service.service';

describe('Service: TryoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TryoutServiceService]
    });
  });

  it('should ...', inject([TryoutServiceService], (service: TryoutServiceService) => {
    expect(service).toBeTruthy();
  }));
});
