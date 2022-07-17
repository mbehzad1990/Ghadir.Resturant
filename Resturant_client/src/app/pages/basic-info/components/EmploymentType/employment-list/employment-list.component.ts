import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RequestModalDto } from 'src/app/shared/dto/_modal_Dto/request-modal-dto';
import { ActionType } from 'src/app/shared/enum/action-type';
import { Employment } from 'src/app/shared/models/_employment/employment.model';
import { AddEditEmploymentComponent } from '../add-edit-employment/add-edit-employment.component';

@Component({
  selector: 'app-employment-list',
  templateUrl: './employment-list.component.html',
  styleUrls: ['./employment-list.component.scss']
})
export class EmploymentListComponent implements OnInit {


  //#region  Private Fields
  //#endregion
  //#region  Public Fields
  //#endregion
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  //#region  Private Methods
  //#endregion
  //#region  Public Methods
  public addNewEmployee(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    const modal_data=new RequestModalDto<Employment>();
    modal_data.action=ActionType.add;
    dialogConfig.data=modal_data;
    this.dialog.open(AddEditEmploymentComponent,dialogConfig);
  }
  //#endregion
}
