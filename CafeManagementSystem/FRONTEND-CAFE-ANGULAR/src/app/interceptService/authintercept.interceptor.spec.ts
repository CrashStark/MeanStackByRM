import { TestBed } from '@angular/core/testing';

import { AuthinterceptInterceptor } from './authintercept.interceptor';

describe('AuthinterceptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthinterceptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthinterceptInterceptor = TestBed.inject(AuthinterceptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
