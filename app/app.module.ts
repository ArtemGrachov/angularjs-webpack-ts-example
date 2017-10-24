import '../node_modules/normalize.css/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';

import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-ui-bootstrap'

import { MainModule } from './modules/main/main.module';
import { OrdersModule } from './modules/orders/orders.module';
import { InfoModule } from './modules/info/info.module';

import { DataService } from './services/data.service';
import { DishesService } from './services/dishes.service';

export const app = angular.module('app', [
    uiRouter,
    MainModule.name,
    InfoModule.name,
    'ui.bootstrap',
    OrdersModule.name
])
    .service(DataService.serviceName, DataService)
    .service(DishesService.serviceName, DishesService)