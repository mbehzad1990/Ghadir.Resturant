import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/_authGuards/auth.guard';

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./pages/authentication/authentication.module').then(m=>m.AuthenticationModule)},
  {path:'',loadChildren:()=>import('./pages/panel/panel.module').then(m=>m.PanelModule),canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
