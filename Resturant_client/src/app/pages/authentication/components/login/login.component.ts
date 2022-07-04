import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //#region Private Fields
  //#endregion

  //#region Public Fields
  loginForm!: FormGroup;
  isLoading$!: Observable<boolean>;
  hidePassword = true;
  //#endregion

  //#region Input & OutPut & Others
  //#region
  constructor() { }

  ngOnInit(): void {
    this._initFormElement();
  }

  //#region Private Methods
  private _initFormElement() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      isRememberMe: new FormControl('')
    });
  }
  //#endregion

}
