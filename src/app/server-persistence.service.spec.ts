/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServerPersistenceService } from './server-persistence.service';

describe('Service: ServerPersistence', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerPersistenceService]
    });
  });

  it('should ...', inject([ServerPersistenceService], (service: ServerPersistenceService) => {
    expect(service).toBeTruthy();
  }));
});
