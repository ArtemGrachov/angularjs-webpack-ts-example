import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const RestaurantsRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('greeting', {
            url: '/main',
            component: 'appGreeting'
        })
        .state('feedback', {
            url: '/feedback',
            component: 'appFeedback'
        })
        .state('restaurants-list', {
            url: '/restaurants-list',
            component: 'appRestaurantsList'
        })
    $urlRouterProvider.otherwise('/main');
}