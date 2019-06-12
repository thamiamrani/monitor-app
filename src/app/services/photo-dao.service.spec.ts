import { TestBed } from '@angular/core/testing';

import { PhotoDAOService } from './photo-dao.service';

describe('PhotoDAOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoDAOService = TestBed.get(PhotoDAOService);
    expect(service).toBeTruthy();
  });
});
