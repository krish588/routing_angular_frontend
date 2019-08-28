import { TestBed } from '@angular/core/testing';

import { IdeaViewService } from './idea-view.service';

describe('IdeaViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeaViewService = TestBed.get(IdeaViewService);
    expect(service).toBeTruthy();
  });
});
