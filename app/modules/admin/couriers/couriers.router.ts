import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const AdminCouriersRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
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
        .state('admin-couriers-new', {
            url: '/new',
            parent: 'admin-couriers',
            component: 'appAdminCouriersEdit'
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
}