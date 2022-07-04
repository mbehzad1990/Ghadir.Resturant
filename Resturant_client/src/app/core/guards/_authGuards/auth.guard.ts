import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FacadeService } from '../../services/facade_core/facade.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _facadeService:FacadeService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const _user_token = this._facadeService.apiFacade.auth.getUserTokenFromLocalStorage();
      if (_user_token != null) {
        //User Token Exist in Local Storage
        return true;
      }
      this._facadeService.apiFacade.auth.logOut();
      return false;
  }

}
