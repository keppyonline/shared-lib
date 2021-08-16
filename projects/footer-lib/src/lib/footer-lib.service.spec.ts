import { TestBed } from '@angular/core/testing';

import { FooterLibService } from './footer-lib.service';

describe('FooterLibService', () => {
  let service: FooterLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
