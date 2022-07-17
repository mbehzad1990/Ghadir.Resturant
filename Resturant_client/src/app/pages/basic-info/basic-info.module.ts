import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInfoRoutingModule } from './basic-info-routing.module';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoleListComponent } from './components/Role/role-list/role-list.component';
import { AddEditRoleComponent } from './components/Role/add-edit-role/add-edit-role.component';
import { MealListComponent } from './components/Meal/meal-list/meal-list.component';
import { MealListTableComponent } from './components/Meal/meal-list/components/meal-list-table/meal-list-table.component';
import { AddEditMealComponent } from './components/Meal/add-edit-meal/add-edit-meal.component';
import { RoleListTableComponent } from './components/Role/role-list/components/role-list-table/role-list-table.component';
import { EmploymentListComponent } from './components/EmploymentType/employment-list/employment-list.component';
import { AddEditEmploymentComponent } from './components/EmploymentType/add-edit-employment/add-edit-employment.component';
import { EmploymentListTableComponent } from './components/EmploymentType/employment-list/components/employment-list-table/employment-list-table.component';

@NgModule({
  declarations: [
    BasicInfoComponent,
    MealListComponent,
    MealListTableComponent,
    AddEditMealComponent,
    RoleListComponent,
    AddEditRoleComponent,
    RoleListTableComponent,
    EmploymentListComponent,
    AddEditEmploymentComponent,
    EmploymentListTableComponent,
  ],
  imports: [
    CommonModule,
    BasicInfoRoutingModule,
    SharedModule
  ]
})
export class BasicInfoModule { }
