import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavHelperService {

  //#region Property

  // Observable Property
  private _isExpanded$ = new BehaviorSubject<boolean>(true);
  private _isSideNavHover$ = new BehaviorSubject<boolean>(false);
  //#endregion

  //#region Public Service

  // Observable Getter
  get isExpanded$() {
    return this._isExpanded$.asObservable();
  }
  get isSideNavHover$() {
    return this._isSideNavHover$.asObservable();
  }
  //#endregion
  constructor() { }

  public setExpandeState(state:boolean){
    console.log("state:",state);
    this._isExpanded$.next(state);
  }
  public setSideNavHoverState(state:boolean){
    this._isSideNavHover$.next(state);
  }
  public getCurrentExpandedState():boolean{
    return this._isExpanded$.getValue();
  }
}
