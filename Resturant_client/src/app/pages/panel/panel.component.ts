import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
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
  sidenavWidth = 4;
  // isExpanded: boolean=true;
  isShowing = false;
  isExpanded$!: Observable<boolean>;
  isShowing$!: Observable<boolean>;

  // mobileQuery!: MediaQueryList;
  //#endregion

  //#region Input & Output & Others

  //#endregion

  constructor(private _facade: FacadeService) {
    this.isExpanded$ = _facade.helperFacade.sidenavHelper.isExpanded$;
    this.isShowing$ = _facade.helperFacade.sidenavHelper.isSideNavHover$;
  }

  ngOnInit(): void {
  }

  //#region Private methods
  //#endregion

  //#region Public methods
  getToggleState(state: boolean) {
    console.log(state);
  }



  // isExpanded = true;
  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    // this.sidenavWidth=200;
    if (!this._facade.helperFacade.sidenavHelper.getCurrentExpandedState()) {
      console.log("sidenave Hover Update,", true);
      this._facade.helperFacade.sidenavHelper.setSideNavHoverState(true);
    }
  }

  mouseleave() {
    // this.sidenavWidth=91;

    if (!this._facade.helperFacade.sidenavHelper.getCurrentExpandedState()) {
      console.log("sidenave Hover Update,", false);
      this._facade.helperFacade.sidenavHelper.setSideNavHoverState(false);
    }
  }

  //#endregion
}
