import '../node_modules/normalize.css/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';

import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-ui-bootstrap'
import * as firebase from 'firebase';

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

export const app = angular.module('app', [
    uiRouter,
    AdminModule.name,
    MainModule.name,
    InfoModule.name,
    'ui.bootstrap',
    OrdersModule.name,
    AuthModule.name
])
    .config(function (fire: any = firebase) {
        fire.initializeApp({
            apiKey: "AIzaSyBejaVDaYDTmIEkdYHWQfnd0cexSWu432A",
            authDomain: "angular-restaurant.firebaseapp.com",
            databaseURL: "https://angular-restaurant.firebaseio.com",
            projectId: "angular-restaurant",
            storageBucket: "angular-restaurant.appspot.com",
            messagingSenderId: "89575301309"
        }, '[DEFAULT]');
    })
    .service(DataService.serviceName, DataService)
    .service(DishesService.serviceName, DishesService)
    .service(RestaurantsService.serviceName, RestaurantsService)
    .service(OrdersService.serviceName, OrdersService)
    .service(CartService.serviceName, CartService)
    .service(FeedbackService.serviceName, FeedbackService)
    .service(AuthService.serviceName, AuthService)
    // .service('dataService', DataService)
    // .service('dishesService', DishesService)
    // .service('restaurantsService', RestaurantsService)
    // .service('ordersSerice', OrdersService)
    // .service('cartService', CartService)
    // .service(FeedbackService.serviceName, FeedbackService)
    // .service(AuthService.serviceName, AuthService)