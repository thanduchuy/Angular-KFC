import { TestBed } from '@angular/core/testing';

import { MennuService } from './mennu.service';

describe('MennuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MennuService = TestBed.get(MennuService);
    expect(service).toBeTruthy();
  });
});
