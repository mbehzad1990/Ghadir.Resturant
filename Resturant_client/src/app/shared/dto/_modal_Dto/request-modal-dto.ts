import { ActionType } from "src/app/shared/enum/action-type";

export class RequestModalDto<T> {
  public data!: T;
  public action!: ActionType;
  public delete_field_name!:string;
}
