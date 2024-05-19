import { TestBed } from '@angular/core/testing';

import { SocieteserviceService } from './societeservice.service';

describe('SocieteserviceService', () => {
  let service: SocieteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocieteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
