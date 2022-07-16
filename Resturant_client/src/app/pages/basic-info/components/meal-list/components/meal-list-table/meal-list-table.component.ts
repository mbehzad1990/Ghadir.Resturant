import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { RequestModalDto } from 'src/app/shared/dto/_modal_Dto/request-modal-dto';
import { ActionType } from 'src/app/shared/enum/action-type';
import { Meal } from 'src/app/shared/models/_meal/meal.model';
import { AddEditMealComponent } from '../add-edit-meal/add-edit-meal.component';
export interface mealData {
  index: string;
  name: string;
  code: number;
  desc: string;
}
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'meal-list-table',
  templateUrl: './meal-list-table.component.html',
  styleUrls: ['./meal-list-table.component.scss']
})


export class MealListTableComponent implements OnInit,AfterViewInit  {

  //#region Private Fields
  //#endregion

  //#region Public Fields
  dataSource = new MatTableDataSource<mealData>();
  displayedColumns: string[] = ['index', 'name', 'code', 'desc', 'menu'];

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

  //#region Private Methods
  //#endregion

  //#region Public Methods
  public editMeal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    const modal_data=new RequestModalDto<Meal>();
    modal_data.action=ActionType.edit;
    dialogConfig.data=modal_data;
    this.dialog.open(AddEditMealComponent,dialogConfig);
  }
  //#endregion
}

function createNewUser(id: number): mealData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    index: id.toString(),
    name: name,
    code: Math.round(Math.random()* (NAMES.length - 1)),
    desc: "",
  };
}
