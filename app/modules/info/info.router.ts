import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const InfoRouter = ['$stateProvider', '$urlRouterProvider', function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('restaurants', {
            url: '/restaurants',
            component: 'appRestaurants'
        })
        .state('restaurant-details', {
            url: '/:id',
            component: 'appRestaurantDetails',
            parent: 'restaurants'
        })
        .state('feedback', {
            url: '/feedback',
            component: 'appFeedback'
        })
        .state('greeting', {
            url: '/greeting',
            component: 'appGreeting'
        })
}]