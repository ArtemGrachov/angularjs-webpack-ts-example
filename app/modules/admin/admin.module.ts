import * as angular from 'angular';
import { IModule } from 'angular';

import { AdminComponent } from './admin/admin.component';
import { AdminDishesComponent } from './dishes/dishes.component';
import { AdminRouter } from './admin.router';

export const AdminModule: IModule = angular.module('adminModule', [])
    .component('appAdmin', AdminComponent)
    .component('appAdminDishes', AdminDishesComponent)
    .config(AdminRouter)