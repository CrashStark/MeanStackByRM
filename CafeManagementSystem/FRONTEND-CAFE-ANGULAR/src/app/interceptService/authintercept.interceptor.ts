import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenServiceService } from '../services/token-service.service';

@Injectable()
export class AuthinterceptInterceptor implements HttpInterceptor {
  token: string = '';
  constructor(private tokenService: TokenServiceService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request);
    let token;
    this.tokenService.getToken().subscribe((response)=>{
       token = response;
    });
    console.log(token);

    // Clone the request and add the token to the headers if available
    const authRequest = token
      ? request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        })
      : request;

      console.log(authRequest);
    // Pass the modified request to the next handler
    return next.handle(authRequest);
  //  return next.handle(request);
  }
}
