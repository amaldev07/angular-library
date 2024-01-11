import { TestBed } from '@angular/core/testing';

import { AmalTestLibService } from './amal-test-lib.service';

describe('AmalTestLibService', () => {
  let service: AmalTestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmalTestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
