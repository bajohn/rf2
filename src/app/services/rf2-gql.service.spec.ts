import { TestBed } from '@angular/core/testing';

import { Rf2GqlService } from './rf2-gql.service';

describe('Rf2GqlService', () => {
  let service: Rf2GqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rf2GqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
