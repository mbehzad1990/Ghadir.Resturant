import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    PanelComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    SharedModule
  ]
})
export class PanelModule { }
