import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) { }

      //#region Property
      private _Auth_Token = 'userToken';
      private _baseUrl = '';

      // Observable Property
      private _isLoading$ = new BehaviorSubject<boolean>(false);
      //#endregion

      //#region Public Service

      // Observable Getter
      get isLoading$() {
        return this._isLoading$.asObservable();
      }


      // Service
      public login() {
        return true;
      }
      public logOut() {
        try {
          // clear user JWT Token from LocalStorage(Client Stporage)
          this.clearUserTokenFromLocalStorage();
          // redirect to login page
          this._router.navigateByUrl('/auth');
        } catch (error) {
          //notification allert
        }

      }
      public generateJWTToken() {

      }
      public setUserTokenIntoLocalStorage() {

      }
      public getUserTokenFromLocalStorage() {
        return false;
      }



      //#endregion

      //#region Private Service
      private clearUserTokenFromLocalStorage() {

      }
      //#endregion
}
