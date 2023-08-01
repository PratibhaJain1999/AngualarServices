import { TestBed } from '@angular/core/testing';

import { FamProductService } from './fam-product.service';

describe('FamProductService', () => {
  let service: FamProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
