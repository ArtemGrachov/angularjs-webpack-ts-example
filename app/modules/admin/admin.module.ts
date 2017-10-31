import * as angular from 'angular';
import { IModule } from 'angular';

import { AdminComponent } from './admin/admin.component';

import { AdminDishesComponent } from './dishes/list/list.component';
import { AdminDishComponent } from './dishes/details/details.component';
import { DishesItem } from './dishes/item/item.directive';
import { IngredientsDirective } from './dishes/details/ingredients/ingredients.directive';

import { EditService } from './edit.service';

import { AdminRouter } from './admin.router';

export const AdminModule: IModule = angular.module('adminModule', [])
    .service(EditService.serviceName, EditService)
    .component('appAdmin', AdminComponent)
    .component('appAdminDishes', AdminDishesComponent)
    .component('appAdminDish', AdminDishComponent)
    .directive('dishesItem', DishesItem)
    .directive('ingredientsSelect', IngredientsDirective)
    .config(AdminRouter)