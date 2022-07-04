import { Injectable, Injector } from '@angular/core';
import { ApiFacadeService } from '../api/_apiFacade/api-facade.service';
import { HelperFacadeService } from '../helper/_helperFacade/helper-facade.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  //#region Property
  private _helperFacade!: HelperFacadeService;
  private _apiFacade!: ApiFacadeService;
  //#endregion

  constructor(private injector: Injector) { }

    //#region Instance Of Service
    public get helperFacade(): HelperFacadeService {
      if (!this._helperFacade) {
        this._helperFacade = this.injector.get(HelperFacadeService);
      }
      return this._helperFacade;
    }
    public get apiFacade(): ApiFacadeService {
      if (!this._apiFacade) {
        this._apiFacade = this.injector.get(ApiFacadeService);
      }
      return this._apiFacade;
    }
    //#endregion
}
