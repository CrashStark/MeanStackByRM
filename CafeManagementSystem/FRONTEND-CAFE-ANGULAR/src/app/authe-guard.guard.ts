import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenServiceService } from './services/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AutheGuardGuard implements CanActivate {
  token:Observable<string | null> | undefined;
  constructor(private tokenService: TokenServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.token=  this.tokenService.getToken();
    if(this.token){
      return true;
    }else{
      return false;
    }
    
  }
  
}
