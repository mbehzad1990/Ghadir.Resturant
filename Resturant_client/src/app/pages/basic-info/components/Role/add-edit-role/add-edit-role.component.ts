import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { RequestModalDto } from 'src/app/shared/dto/_modal_Dto/request-modal-dto';
import { ActionType } from 'src/app/shared/enum/action-type';
import { ResultType } from 'src/app/shared/enum/result-type';
import { Role } from 'src/app/shared/models/_role/role.model';

@Component({
  selector: 'app-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.scss']
})
export class AddEditRoleComponent implements OnInit,OnDestroy  {
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
  constructor(public dialogRef: MatDialogRef<AddEditRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RequestModalDto<Role>) { }

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
      this.title= 'تعریف نقش جدید';
      this.actionButtonText="ثبت نقش"
    }else{
      this.title= 'ویرایش نقش';
      this.actionButtonText="ویرایش نقش"
    }
  }
  //#endregion

  //#region Public Methods

  //#endregion
}
