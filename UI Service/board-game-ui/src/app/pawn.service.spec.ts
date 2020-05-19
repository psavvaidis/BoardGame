import { TestBed } from '@angular/core/testing';

import { PawnService } from './pawn.service';
import { King } from './pawns/king';

describe('PawnService', () => {
  let service: PawnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PawnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
