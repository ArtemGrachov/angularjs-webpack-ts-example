import * as angular from 'angular';

import { DishesComponent } from './dishes/dishes.component';
import { DishPreviewComponent } from './dishes/dish-preview/dish-preview.component';
import { DishComponent } from './dish/dish.component';
import { OrdersRouter } from './orders.router';

export const OrdersModule = angular.module('ordersModule', [])
    .component('appDishes', DishesComponent)
    .component('appDishPreview', DishPreviewComponent)
    .component('appDish', DishComponent)
    .config(OrdersRouter)