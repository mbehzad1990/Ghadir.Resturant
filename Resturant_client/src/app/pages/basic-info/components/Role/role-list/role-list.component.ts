import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RequestModalDto } from 'src/app/shared/dto/_modal_Dto/request-modal-dto';
import { ActionType } from 'src/app/shared/enum/action-type';
import { Role } from 'src/app/shared/models/_role/role.model';
import { AddEditRoleComponent } from '../add-edit-role/add-edit-role.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

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
  public addNewRole(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    const modal_data=new RequestModalDto<Role>();
    modal_data.action=ActionType.add;
    dialogConfig.data=modal_data;
    this.dialog.open(AddEditRoleComponent,dialogConfig);
  }
  //#endregion
}
