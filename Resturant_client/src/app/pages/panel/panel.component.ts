import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { FacadeService } from 'src/app/core/services/facade_core/facade.service';
import { BreadcrumbService } from 'xng-breadcrumb';

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
  titleComponenet: string = "";
  componentTitle!:string;

  // mobileQuery!: MediaQueryList;
  //#endregion

  //#region Input & Output & Others

  //#endregion

  constructor(private _facade: FacadeService, private breadcrumbService: BreadcrumbService,) {
    this.isExpanded$ = _facade.helperFacade.sidenavHelper.isExpanded$;
    this.isShowing$ = _facade.helperFacade.sidenavHelper.isSideNavHover$;
    this._setBreadCrumbTitle();
  }

  ngOnInit(): void {
  }

  //#region Private methods
  private _setBreadCrumbTitle() {
    if (this.breadcrumbService.breadcrumbs$ != null) {

      this.breadcrumbService.breadcrumbs$.forEach((item) => {
        if (item.length != 0) {
          this.componentTitle = item[item.length - 1].label?.toString()!;
        }
      })

    }
  }
  //#endregion

  //#region Public methods
  public mouseenter() {
    if (!this._facade.helperFacade.sidenavHelper.getCurrentExpandedState()) {
      console.log("sidenave Hover Update,", true);
      this._facade.helperFacade.sidenavHelper.setSideNavHoverState(true);
    }
  }
  public mouseleave() {
    // this.sidenavWidth=91;

    if (!this._facade.helperFacade.sidenavHelper.getCurrentExpandedState()) {
      console.log("sidenave Hover Update,", false);
      this._facade.helperFacade.sidenavHelper.setSideNavHoverState(false);
    }
  }
  //#endregion
}
