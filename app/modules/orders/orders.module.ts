import * as angular from 'angular';

import CartComponent from './cart/cart.component';
import DishComponent from './dish/dish.component';
import DishesComponent from './dishes/dishes.component';
import OrderComponent from './order/order.component';

import { OrdersRouter } from './orders.router';

export const OrdersModule = angular.module('ordersModule', [])
    .component('appCart', CartComponent)
    .component('appDish', DishComponent)
    .component('appDishes', DishesComponent)
    .component('appOrder', OrderComponent)
    .config(OrdersRouter)