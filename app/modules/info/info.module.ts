import * as angular from 'angular';
import { IModule } from 'angular';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './restaurants/restaurant-details/restaurant-details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GreetingComponent } from './greeting/greeting.component';

import { InfoRouter } from './info.router';

export const InfoModule: IModule = angular.module('infoModule', [])
    .component('appRestaurants', RestaurantsComponent)
    .component('appRestaurantDetails', RestaurantDetailsComponent)
    .component('appFeedback', FeedbackComponent)
    .component('appGreeting', GreetingComponent)
    .config(InfoRouter)