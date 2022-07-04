import { Injectable, Injector } from '@angular/core';
import { AuthService } from '../_auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiFacadeService {

  constructor(private injector: Injector) { }

  //#region Property
  private _auth!: AuthService;
  //#endregion

  //#region Instance Of Service
  public get auth(): AuthService {
    if (!this._auth) {
      this._auth = this.injector.get(AuthService);
    }
    return this._auth;
  }

  //#endregion
}
