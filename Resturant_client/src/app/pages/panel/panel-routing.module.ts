import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {
    path: 'panel', component: PanelComponent, data: { breadcrumb: 'پنل' },children: [
      { path: 'basic', loadChildren: () => import('../basic-info/basic-info.module').then(m => m.BasicInfoModule), data: { breadcrumb: 'تعاریف پایه' } }
    ]
  },
  {
    path: '', component: PanelComponent, children: [
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
