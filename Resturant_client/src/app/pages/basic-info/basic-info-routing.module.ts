import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploymentListComponent } from './components/EmploymentType/employment-list/employment-list.component';
import { MealListComponent } from './components/Meal/meal-list/meal-list.component';
import { RoleListComponent } from './components/Role/role-list/role-list.component';

const routes: Routes = [
  {path:'meal',component:MealListComponent,data:{breadcrumb:'وعده غذایی'}},
  {path:'role',component:RoleListComponent,data:{breadcrumb:'نقش'}},
  {path:'employee',component:EmploymentListComponent,data:{breadcrumb:'نوع استخدام'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInfoRoutingModule { }
