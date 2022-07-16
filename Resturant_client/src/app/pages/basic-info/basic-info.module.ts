import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInfoRoutingModule } from './basic-info-routing.module';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MealListTableComponent } from './components/meal-list/components/meal-list-table/meal-list-table.component';
import { AddEditMealComponent } from './components/meal-list/components/add-edit-meal/add-edit-meal.component';

@NgModule({
  declarations: [
    BasicInfoComponent,
    MealListComponent,
    MealListTableComponent,
    AddEditMealComponent,
  ],
  imports: [
    CommonModule,
    BasicInfoRoutingModule,
    SharedModule
  ]
})
export class BasicInfoModule { }
