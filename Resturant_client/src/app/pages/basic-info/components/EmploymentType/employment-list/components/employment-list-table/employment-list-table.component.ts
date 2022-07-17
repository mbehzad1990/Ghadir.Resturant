import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { RequestModalDto } from 'src/app/shared/dto/_modal_Dto/request-modal-dto';
import { ActionType } from 'src/app/shared/enum/action-type';
import { Employment } from 'src/app/shared/models/_employment/employment.model';
import { AddEditEmploymentComponent } from '../../../add-edit-employment/add-edit-employment.component';

export interface employmentData {
  index: string;
  name: string;
  code: number;
  desc:string;
}
const NAMES: string[] = [
  'کارمند',
  'مدیر',
  'کارآموز',

];
@Component({
  selector: 'employment-list-table',
  templateUrl: './employment-list-table.component.html',
  styleUrls: ['./employment-list-table.component.scss']
})
export class EmploymentListTableComponent implements OnInit ,AfterViewInit {
  //#region  Private Fields
  //#endregion
  //#region  Public Fields
  dataSource = new MatTableDataSource<employmentData>();
  displayedColumns: string[] = ['index', 'name', 'code','desc', 'menu'];

  isLoading$!: Observable<boolean>;
  //#endregion
  //#region Input & Output & Other
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //#endregion

  constructor(private dialog: MatDialog) {
    const meals = Array.from({length: 50}, (_, k) => createNewUser(k + 1));
    this.dataSource=new MatTableDataSource(meals);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }
  //#region  Private Methods
  //#endregion
  //#region  Public Methods
  public editRole(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    const modal_data=new RequestModalDto<Employment>();
    modal_data.action=ActionType.edit;
    dialogConfig.data=modal_data;
    this.dialog.open(AddEditEmploymentComponent,dialogConfig);
  }
  //#endregion
}
function createNewUser(id: number): employmentData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    index: id.toString(),
    name: name,
    code: Math.round(Math.random()* (NAMES.length - 1)),
    desc:""
  };
}
