import * as angular from 'angular';
import { IModule } from 'angular';

import { AdminComponent } from './admin/admin.component';
import { AdminDishesComponent } from './dishes/dishes.component';
import { AdminDishComponent } from './dishes/dish/dish.component';
import { AdminEditComponent } from './edit/edit.component';

import { DishesRowDirective } from './dishes/dishes-row/dishes-row.directive';

import { AdminRouter } from './admin.router';

export const AdminModule: IModule = angular.module('adminModule', [])
    .component('appAdmin', AdminComponent)
    .component('appAdminDishes', AdminDishesComponent)
    .component('appAdminDish', AdminDishComponent)
    .component('appAdminEdit', AdminEditComponent)
    .directive('dishesRow', DishesRowDirective)
    .config(AdminRouter)