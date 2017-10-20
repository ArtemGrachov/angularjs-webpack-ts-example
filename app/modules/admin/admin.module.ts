import * as angular from 'angular';

import AdminMainComponent from './main/main.component';
// couriers
import AdminCouriersComponent from './couriers/couriers.component';
import AdminCouriersDetailsComponent from './couriers/details/details.component';
import AdminCouriersListComponent from './couriers/list/list.component';
import AdminCouriersEditComponent from './couriers/edit/edit.component';
// dishes
import AdminDishesComponent from './dishes/dishes.component';
import AdminDishesCategoriesComponent from './dishes/categories/categories.component';
import AdminDishesDetailsComponent from './dishes/details/details.component';
import AdminDishesEditComponent from './dishes/details/details.component';
import AdminDishesListComponent from './dishes/list/list.component';
// orders
import AdminOrdersComponent from './orders/details/details.component';
import AdminOrdersDetailsComponent from './orders/details/details.component';
import AdminOrdersListComponent from './orders/list/list.component';
// restaurants
import AdminRestaurantsComponent from './restaurants/restaurants.component';
import AdminRestaurantsDetailsComponent from './restaurants/details/details.component';
import AdminRestaurantEditComponent from './restaurants/edit/edit.component';
import AdminRestaurantsListComponent from './restaurants/list/list.component';
// feedbacks
import AdminFeedbacks from './feedbacks/feedbacks.component';

import { AdminRouter } from './admin.router';

export const AdminModule = angular.module('adminModule', [])
    .component('appAdmin', AdminMainComponent)
    .component('appAdminCouriers', AdminCouriersComponent)
    .component('appAdminCouriersEdit', AdminCouriersEditComponent)
    .component('appAdminCouriersDetails', AdminCouriersDetailsComponent)
    .component('appAdminCouriersList', AdminCouriersListComponent)
    .component('appAdminDishes', AdminDishesComponent)
    .component('appAdminDishesCategories', AdminDishesCategoriesComponent)
    .component('appAdminDishesDetails', AdminDishesDetailsComponent)
    .component('appAdminDishesEdit', AdminDishesEditComponent)
    .component('appAdminDishesList', AdminDishesListComponent)
    .component('appAdminOrders', AdminOrdersComponent)
    .component('appAdminOrdersDetails', AdminOrdersDetailsComponent)
    .component('appAdminOrdersList', AdminOrdersListComponent)
    .component('appAdminRestaurants', AdminRestaurantsComponent)
    .component('appAdminRestaurantsDetails', AdminRestaurantsDetailsComponent)
    .component('appAdminRestaurantEdit', AdminRestaurantEditComponent)
    .component('appAdminRestaurantsList', AdminRestaurantsListComponent)
    .component('appAdminFeedbacks', AdminFeedbacks)
    .config(AdminRouter)