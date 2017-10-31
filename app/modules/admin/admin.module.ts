import * as angular from 'angular';
import { IModule } from 'angular';

import { AdminComponent } from './admin/admin.component';

import { AdminDishesComponent } from './dishes/list/list.component';
import { DishesItem } from './dishes/item/item.directive';


import { AdminRouter } from './admin.router';

export const AdminModule: IModule = angular.module('adminModule', [])
    .component('appAdmin', AdminComponent)
    .component('appAdminDishes', AdminDishesComponent)
    .directive('dishesItem', DishesItem)
    .config(AdminRouter)