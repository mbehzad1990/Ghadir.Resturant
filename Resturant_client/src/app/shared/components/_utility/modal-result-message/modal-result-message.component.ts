import { Component, Input, OnInit } from '@angular/core';
import { ResultType } from 'src/app/shared/enum/result-type';

@Component({
  selector: 'shared-modal-result-message',
  templateUrl: './modal-result-message.component.html',
  styleUrls: ['./modal-result-message.component.scss']
})
export class ModalResultMessageComponent implements OnInit {
  //#region Public field
  class_name: string = '';
  //#endregion

  //#region Private field
  //#endregion

  //#region Input & Output
  @Input() ResultType!: ResultType;
  @Input() messageText!: string;
  message!: string;
  //#endregion
  constructor() { }

  ngOnInit(): void {

    this.message = this.messageText;

    this.class_name = this.getResultType_class(this.ResultType);
  }
  //#region Private Methods
  //#endregion
  //#region Public Methods
  public getResultType_class(resultType: ResultType): string {
    let className: string = '';
    switch (resultType) {
      case ResultType.error:
        className = 'error';
        break;
      case ResultType.warning:
        className = 'warning';
        break;
      case ResultType.Successfully:
        className = 'success';
        break;
    }
    return className;
  }
  //#endregion
}
