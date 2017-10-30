import * as angular from 'angular';
import { IModule } from 'angular';

import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './list/list.component';
import { AdminDetailsComponent } from './details/details.component';

import { AdminRouter } from './admin.router';

export const AdminModule: IModule = angular.module('adminModule', [])
    .component('appAdmin', AdminComponent)
    .component('appAdminList', AdminListComponent)
    .component('appAdminDetails', AdminDetailsComponent)
    .config(AdminRouter)