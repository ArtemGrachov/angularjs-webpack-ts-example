import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const OrdersRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('cart', {
            url: '/cart',
            component: 'appCart'
        })
        .state('dish', {
            url: '/dishes/:id',
            component: 'appDish'
        })
        .state('dishes', {
            url: '/dishes',
            component: 'appDishes'
        })
        .state('order', {
            url: '/order',
            component: 'appOrder'
        })
}