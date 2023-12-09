import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { }

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  setToken(token: string): void {
    this.tokenSubject.next(token);
  }
}
