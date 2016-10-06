/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleBooksApiService } from './google-books-api.service';

describe('Service: GoogleBooksApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleBooksApiService]
    });
  });

  it('should ...', inject([GoogleBooksApiService], (service: GoogleBooksApiService) => {
    expect(service).toBeTruthy();
  }));
});
