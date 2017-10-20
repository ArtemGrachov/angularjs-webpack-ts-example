import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const AdminOrdersRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
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
}