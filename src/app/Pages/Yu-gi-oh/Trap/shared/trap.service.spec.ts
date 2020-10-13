import { TestBed } from '@angular/core/testing';

import { TrapService } from './trap.service';

describe('TrapService', () => {
  let service: TrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
