import { TestBed } from '@angular/core/testing';

import { ShowService } from './shows.service';

describe('ShowsService', () => {
  let service: ShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
