import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const AdminRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('admin', {
            url: '/admin',
            component: 'appCart'
        })
        .state('admin-couriers', {
            url: '/',
            parent: 'admin',
            component: 'appAdminCouriers'
        })
        .state('admin-couriers-list', {
            url: '/list',
            parent: 'admin-couriers',
            component: 'appAdminCouriersList'
        })
        .state('admin-couriers-edit', {
            url: '/:id/edit',
            parent: 'admin-couriers',
            component: 'appAdminCouriersEdit'
        })
        .state('admin-couriers-details', {
            url: '/:id',
            parent: 'admin',
            component: 'appAdminCouriersDetails'
        })
        .state('admin-dishes', {
            url: '/dishes',
            parent: 'admin',
            component: 'appAdminDishes'
        })
        .state('admin-dishes-categories', {
            url: '/categories',
            parent: 'admin-dishes',
            component: 'appAdminDishesCategories'
        })
        .state('admin-dishes-details', {
            url: '/:id',
            parent: 'admin-dishes',
            component: 'appAdminDishesDetails'
        })
        // couriers edit! .state
        .state('admin-dishes-edit', {
            url: '/:id/edit',
            parent: 'admin-dishes',
            component: 'appAdminDishesEdit'
        })
        .state('admin-dishes-list', {
            url: '/list',
            parent: 'admin-dishes',
            component: 'appAdminDishesList'
        })
        .state('admin-orders', {
            url: '/orders',
            parent: 'admin',
            component: 'appAdminOrders'
        })
        .state('admin-orders-details', {
            url: '/:id',
            parent: 'admin-orders',
            component: 'appAdminOrdersDetails'
        })
        .state('admin-orders-list', {
            url: '/list',
            parent: 'admin-orders',
            component: 'appAdminOrdersList'
        })
        .state('admin-restaurants', {
            url: '/restaurants',
            parent: 'admin',
            component: 'appAdminRestaurans'
        })
        .state('admin-restaurants-details', {
            url: '/:id',
            parent: 'admin-restaurants',
            component: 'appAdminRestaurantsDetails'
        })
        .state('admin-restaurants-edit', {
            url: '/:id/edit',
            parent: 'admin-restaurants',
            component: 'appAdminRestaurantsEdit'
        })
        .state('admin-restaurants-list', {
            url: '/list',
            parent: 'admin-restaurants',
            component: 'appAdminRestaurantsList'
        })
        .state('admin-feedbacks', {
            url: '/feedbacks',
            parent: 'admin',
            component: 'appAdminFeedbacks'
        })
}