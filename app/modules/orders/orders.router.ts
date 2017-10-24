import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const OrdersRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('dishes', {
            url: '/dishes',
            component: 'appDishes'
        })
        .state('dish', {
            url: '/dishes/:id',
            component: 'appDish'
        })
        .state('order', {
            url: '/order',
            component: 'appOrder'
        })
}