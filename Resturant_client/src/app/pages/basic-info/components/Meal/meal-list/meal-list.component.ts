import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RequestModalDto } from 'src/app/shared/dto/_modal_Dto/request-modal-dto';
import { ActionType } from 'src/app/shared/enum/action-type';
import { Meal } from 'src/app/shared/models/_meal/meal.model';
import { AddEditMealComponent } from '../add-edit-meal/add-edit-meal.component';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {

  //#region Private Fields
  //#endregion

  //#region Public Fields
  //#endregion
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  //#region Private Methods
  //#endregion
  //#region Public Methods
  public addNewMeal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    const modal_data=new RequestModalDto<Meal>();
    modal_data.action=ActionType.add;
    dialogConfig.data=modal_data;
    this.dialog.open(AddEditMealComponent,dialogConfig);
  }
  //#endregion
}
