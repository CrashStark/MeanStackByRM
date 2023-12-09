import { TestBed } from '@angular/core/testing';

import { AutheGuardGuard } from './authe-guard.guard';

describe('AutheGuardGuard', () => {
  let guard: AutheGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutheGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
