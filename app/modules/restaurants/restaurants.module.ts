import * as angular from 'angular';

import GreetingComponent from './greeting/greeting.component';
import FeedbackComponent from './feedback/feedback.component';
import RestaurantsListComponent from './restaurants-list/restaurants-list.component';

import { RestaurantsRouter } from './restaurants.router';

export const RestaurantsModule = angular.module('restaurantsModule', [])
    .component('appGreeting', GreetingComponent)
    .component('appFeedback', FeedbackComponent)
    .component('appRestaurantsList', RestaurantsListComponent)
    .config(RestaurantsRouter)