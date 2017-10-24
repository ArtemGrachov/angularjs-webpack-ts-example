import * as angular from 'angular';

import { DishesComponent } from './dishes/dishes.component';
import { DishPreviewComponent } from './dishes/dish-preview/dish-preview.component';
import { DishComponent } from './dish/dish.component';
import { DishCartCounterComponent } from './dishes/dish-cart-counter/dish-cart-counter.component';
import { CartItemComponent } from './order/cart-item/cart-item.component';
import { OrderComponent } from './order/order.component';

import { OrdersRouter } from './orders.router';

export const OrdersModule = angular.module('ordersModule', [])
    .component('appDishes', DishesComponent)
    .component('appDishCartCounter', DishCartCounterComponent)
    .component('appDishPreview', DishPreviewComponent)
    .component('appCartItem', CartItemComponent)
    .component('appDish', DishComponent)
    .component('appOrder', OrderComponent)
    .config(OrdersRouter)