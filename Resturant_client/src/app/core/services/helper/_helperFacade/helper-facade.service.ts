import { Injectable, Injector } from '@angular/core';
import { SidenavHelperService } from '../_panelHelper/sidenav-helper.service';

@Injectable({
  providedIn: 'root'
})
export class HelperFacadeService {

  constructor(private injector: Injector) { }

  //#region Property
  private _sidenavHelper!: SidenavHelperService;
  //#endregion

  //#region Instance Of Service
  public get sidenavHelper(): SidenavHelperService {
    if (!this._sidenavHelper) {
      this._sidenavHelper = this.injector.get(SidenavHelperService);
    }
    return this._sidenavHelper;
  }

  //#endregion
}
