import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './materialComponents_module/material.module';
import { ModalResultMessageComponent } from './components/_utility/modal-result-message/modal-result-message.component';



@NgModule({
  declarations: [
    ModalResultMessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    ModalResultMessageComponent
  ]
})
export class SharedModule { }
