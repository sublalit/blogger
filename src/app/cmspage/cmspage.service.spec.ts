import { TestBed, inject } from '@angular/core/testing';

import { CmspageService } from './cmspage.service';

describe('CmspageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmspageService]
    });
  });

  it('should be created', inject([CmspageService], (service: CmspageService) => {
    expect(service).toBeTruthy();
  }));
});
