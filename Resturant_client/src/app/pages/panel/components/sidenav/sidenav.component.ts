import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FacadeService } from 'src/app/core/services/facade_core/facade.service';

@Component({
  selector: 'panel-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  //#region Private fields
  //#endregion

  //#region Public fields
  isHover$!:Observable<boolean>;
  isExpanded$!:Observable<boolean>;
  //#endregion

  //#region Input & Output & Others
  // @Input() isExpanded: boolean=true;

  //#endregion

  constructor(private _facade:FacadeService) {
    this.isHover$=_facade.helperFacade.sidenavHelper.isSideNavHover$;
    this.isExpanded$=_facade.helperFacade.sidenavHelper.isExpanded$;
  }

  ngOnInit(): void {
  }

  //#region Private methods
  //#endregion

  //#region Public methods
  //#endregion
}
