/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UrifyService } from './urify.service';

describe('Service: Urify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrifyService]
    });
  });

  it('should ...', inject([UrifyService], (service: UrifyService) => {
    expect(service).toBeTruthy();
  }));
});
