import { TestBed } from '@angular/core/testing';

import { GFGService } from './gfg.service';

describe('GFGService', () => {
  let service: GFGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GFGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
