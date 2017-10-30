import '../node_modules/normalize.css/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';

import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-ui-bootstrap'
import * as firebase from 'firebase';
import 'oclazyload';

import { MainModule } from './modules/main/main.module';
import { OrdersModule } from './modules/orders/orders.module';
import { InfoModule } from './modules/info/info.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';

import { DataService } from './services/data.service';
import { DishesService } from './services/dishes.service';
import { RestaurantsService } from './services/restaurants.service';
import { OrdersService } from './services/orders.service';
import { CartService } from './services/cart.service';
import { FeedbackService } from './services/feedback.service';
import { AuthService } from './services/auth.service';
import { LazyLoadService } from './services/lazyload.service';

import { firebaseConfig } from './firebase.config';

export const app = angular.module('app', [
    uiRouter,
    // AdminModule.name,
    MainModule.name,
    InfoModule.name,
    'ui.bootstrap',
    OrdersModule.name,
    AuthModule.name,
    'oc.lazyLoad'
])
    .run(function (fire: any = firebase) {
        fire.initializeApp(firebaseConfig, '[DEFAULT]');
    })
    .service(LazyLoadService.serviceName, LazyLoadService)
    .service(DataService.serviceName, DataService)
    .service(DishesService.serviceName, DishesService)
    .service(RestaurantsService.serviceName, RestaurantsService)
    .service(OrdersService.serviceName, OrdersService)
    .service(CartService.serviceName, CartService)
    .service(FeedbackService.serviceName, FeedbackService)
    .service(AuthService.serviceName, AuthService)