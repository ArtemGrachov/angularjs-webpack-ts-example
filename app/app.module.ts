import '../node_modules/normalize.css/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';

import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { MainModule } from './modules/main/main.module';
import { AdminModule } from './modules/admin/admin.module';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';
import { OrdersModule } from './modules/orders/orders.module';

angular.module('app', [
    uiRouter,
    MainModule.name,
    RestaurantsModule.name,
    OrdersModule.name
])