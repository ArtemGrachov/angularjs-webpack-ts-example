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
        .state('restaurants-details', {
            url: '/:id',
            component: 'appRestaurantsDetails',
            parent: 'restaurants-list'
        })
    $urlRouterProvider.otherwise('/main');
}