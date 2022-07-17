import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { RequestModalDto } from 'src/app/shared/dto/_modal_Dto/request-modal-dto';
import { ActionType } from 'src/app/shared/enum/action-type';
import { ResultType } from 'src/app/shared/enum/result-type';
import { Employment } from 'src/app/shared/models/_employment/employment.model';

@Component({
  selector: 'app-add-edit-employment',
  templateUrl: './add-edit-employment.component.html',
  styleUrls: ['./add-edit-employment.component.scss']
})
export class AddEditEmploymentComponent implements OnInit {

 //#region Private Fields
 private subscriptions: Subscription[] = [];
 //#endregion

 //#region Public Fields
 title!:string;
 actionButtonText!:string;
 from!: FormGroup;
 numberPattern='^[0-9]*$';
 isLoading$!: Observable<boolean>;

 messageResultType: ResultType=ResultType.error;
 alertMessage: string="عملیات با خطا مواجه شده است";
 //#endregion
 constructor(public dialogRef: MatDialogRef<AddEditEmploymentComponent>,
   @Inject(MAT_DIALOG_DATA) public data: RequestModalDto<Employment>) { }

 ngOnInit(): void {
   this._setTitle();
   this._initFormElement();
 }
 ngOnDestroy(): void {
   this.subscriptions.forEach(sb=>sb.unsubscribe());
  }

 //#region Private Methods
 private _initFormElement() {
   this.from = new FormGroup({
     name: new FormControl('', Validators.required),
     code: new FormControl('', Validators.required),
     description: new FormControl(''),
   });
 }
 private _setTitle(){
   if(this.data.action==ActionType.add){
     this.title= 'تعریف نوع استخدام';
     this.actionButtonText="ثبت نوع استخدام"
   }else{
     this.title= 'ویرایش نوع استخدام';
     this.actionButtonText="ویرایش نوع استخدام"
   }
 }
 //#endregion

 //#region Public Methods

 //#endregion
}
