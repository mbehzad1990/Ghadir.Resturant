import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FacadeService } from 'src/app/core/services/facade_core/facade.service';

@Component({
  selector: 'panel-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  //#region Private Fields
  private _isExpanded=false;
  //#endregion

  //#region Public Fields
  @Output() expandToggle=new EventEmitter<boolean>();
  //#endregion
  constructor( private _facade:FacadeService) { }

  ngOnInit(): void {
  }

  //#region Private Fields
  //#endregion

  //#region Public Fields
  changeExpandToggle(){
    // this._isExpanded=!this._isExpanded;
    // this.expandToggle.emit(this._isExpanded);
    this._facade.helperFacade.sidenavHelper.setExpandeState(!(this._facade.helperFacade.sidenavHelper.getCurrentExpandedState()));
  }
  //#endregion
}
