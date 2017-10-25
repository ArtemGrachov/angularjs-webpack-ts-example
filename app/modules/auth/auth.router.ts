import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const AuthRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('profile', {
            url: '/profile',
            component: 'appProfile'
        })
        .state('auth', {
            url: '/auth',
            component: 'appAuth'
        })
}