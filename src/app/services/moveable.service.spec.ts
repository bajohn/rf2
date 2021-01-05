import { TestBed } from '@angular/core/testing';

import { MoveableService } from './moveable.service';

describe('MoveableService', () => {
  let service: MoveableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
