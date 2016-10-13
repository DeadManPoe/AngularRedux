/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockingService } from './mocking.service';

describe('Service: Mocking', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockingService]
    });
  });

  it('should ...', inject([MockingService], (service: MockingService) => {
    expect(service).toBeTruthy();
  }));
});
