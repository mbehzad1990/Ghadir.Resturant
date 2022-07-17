import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { RequestModalDto } from 'src/app/shared/dto/_modal_Dto/request-modal-dto';
import { ActionType } from 'src/app/shared/enum/action-type';
import { ResultType } from 'src/app/shared/enum/result-type';
import { Meal } from 'src/app/shared/models/_meal/meal.model';

@Component({
  selector: 'app-add-edit-meal',
  templateUrl: './add-edit-meal.component.html',
  styleUrls: ['./add-edit-meal.component.scss']
})
export class AddEditMealComponent implements OnInit,OnDestroy   {

  //#region Private Fields
  private subscriptions: Subscription[] = [];
  //#endregion

  //#region Public Fields
  title!:string;
  actionButtonText!:string;
  from!: FormGroup;
  numberPattern='^[0-9]*$';
  
  messageResultType: ResultType=ResultType.warning;
  alertMessage: string="عملیات با خطا مواجه شده است";
  //#endregion

  constructor( public dialogRef: MatDialogRef<AddEditMealComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RequestModalDto<Meal>) { }

  ngOnInit(): void {
    this._initFormElement();
    this._setTitle();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sb=>sb.unsubscribe());
   }

  //#region Private Methods
  private _initFormElement() {
    this.from = new FormGroup({
      name: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      active: new FormControl(false),
      description: new FormControl(''),
    });
  }
  private _setTitle(){
    if(this.data.action==ActionType.add){
      this.title= 'تعریف وعده غدایی جدید';
      this.actionButtonText="ثبت وعده"
    }else{
      this.title= 'ویرایش وعده غذایی';
      this.actionButtonText="ویرایش وعده"
    }
  }
  //#endregion

  //#region Public Methods

  //#endregion
}
