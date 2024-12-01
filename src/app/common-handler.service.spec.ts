import { TestBed } from '@angular/core/testing';

import { CommonHandlerService } from './common-handler.service';

describe('CommonHandlerService', () => {
  let service: CommonHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
