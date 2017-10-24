import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const InfoRouter = function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('restaurants', {
            url: '/restaurants/',
            component: 'appRestaurants'
        })
        .state('restaurant-details', {
            url: '/restaurants/:id',
            component: 'appRestaurantDetails',
            parent: 'restaurants'
        })
}