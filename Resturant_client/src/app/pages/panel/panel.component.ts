import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FacadeService } from 'src/app/core/services/facade_core/facade.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  //#region Private fields
  //#endregion

  //#region Public fields
  // isExpanded: boolean=true;
  isShowing = false;
  isExpanded$!:Observable<boolean>;

  // mobileQuery!: MediaQueryList;
  //#endregion

  //#region Input & Output & Others

  //#endregion

  // constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  //   this.mobileQuery.addListener(this._mobileQueryListener);
  // }
  constructor(private _facade:FacadeService) {
    this.isExpanded$=_facade.helperFacade.sidenavHelper.isExpanded$;
   }

  ngOnInit(): void {
  }

  //#region Private methods
  //#endregion

  //#region Public methods
  getToggleState(state:boolean){
    // console.log(state);
    // this.isExpanded=state;
    // if(this.isExpanded==false){
    //   this.isShowing = true;
    // }
  }

  mouseenter() {
    if (!this._facade.helperFacade.sidenavHelper.getCurrentExpandedState()) {
      console.log("sidenave Hover Update,",true);
      this._facade.helperFacade.sidenavHelper.setSideNavHoverState(true);
    }
  }

  mouseleave() {
    if (!this._facade.helperFacade.sidenavHelper.getCurrentExpandedState()) {
      console.log("sidenave Hover Update,",false);
      this._facade.helperFacade.sidenavHelper.setSideNavHoverState(false);
    }
  }

  //#endregion
}
