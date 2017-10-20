import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const AdminMainRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('admin', {
            url: '/admin',
            component: 'appAdmin'
        })
        .state('admin-feedbacks', {
            url: '/feedbacks',
            parent: 'admin',
            component: 'appAdminFeedbacks'
        })
}