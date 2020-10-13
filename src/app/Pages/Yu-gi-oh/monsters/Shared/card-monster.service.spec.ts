import { TestBed } from '@angular/core/testing';

import { CardMonsterService } from './card-monster.service';

describe('CardMonsterService', () => {
  let service: CardMonsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardMonsterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
