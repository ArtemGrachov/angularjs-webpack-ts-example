import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const AdminRestaurantsRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('admin-restaurants', {
            url: '/restaurants',
            parent: 'admin',
            component: 'appAdminRestaurants'
        })
        .state('admin-restaurants-details', {
            url: '/:id',
            parent: 'admin-restaurants',
            component: 'appAdminRestaurantsDetails'
        })
        .state('admin-restaurants-new', {
            url: '/new',
            parent: 'admin-restaurants',
            component: 'appAdminRestaurantsEdit'
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
}