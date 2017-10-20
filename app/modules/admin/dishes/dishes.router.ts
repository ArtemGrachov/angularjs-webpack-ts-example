import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const AdminDishesRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
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
        .state('admin-dishes-list', {
            url: '/list',
            parent: 'admin-dishes',
            component: 'appAdminDishesList'
        })
        .state('admin-dishes-new', {
            url: '/new',
            parent: 'admin-dishes',
            component: 'appAdminDishesEdit'
        })
        .state('admin-dishes-edit', {
            url: '/:id/edit',
            parent: 'admin-dishes',
            component: 'appAdminDishesEdit'
        })
        .state('admin-dishes-details', {
            url: '/:id',
            parent: 'admin-dishes',
            component: 'appAdminDishesDetails'
        })
}