import { TestBed } from '@angular/core/testing';

import { NameRetrievalService } from './name-retrieval.service';

describe('NameRetrievalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NameRetrievalService = TestBed.get(NameRetrievalService);
    expect(service).toBeTruthy();
  });
});
