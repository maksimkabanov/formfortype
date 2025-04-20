import { TestBed } from '@angular/core/testing';

import { FormfortypeService } from './formfortype.service';

describe('FormfortypeService', () => {
  let service: FormfortypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormfortypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
