import { TestBed } from '@angular/core/testing';

import { ChessWebSocketService } from './chess-web-socket.service';

describe('ChessWebSocketService', () => {
  let service: ChessWebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessWebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
