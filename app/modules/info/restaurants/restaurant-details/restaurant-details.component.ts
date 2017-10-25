import { IComponentOptions, IScope } from 'angular';
import { StateParams } from '@uirouter/angularjs';
import { RestaurantsService } from '../../../../services/restaurants.service';

import './restaurant-details.component.scss';

import { Restaurant } from '../../../../models/restaurant.model';

class Controller {
    constructor(private restaurantsService: RestaurantsService, private $stateParams: StateParams, private $scope: IScope) { }
    static readonly $inject: string[] = [RestaurantsService.serviceName, '$stateParams', '$scope'];
    private restaurantObs: any;
    public restaurant: Restaurant;

    $onInit() {
        this.restaurantObs = this.restaurantsService
            .getRestaurant(this.$stateParams.id)
        this.restaurantObs
            .on('value', (res: any) => {
                this.restaurant = res.val();
            })
    }
    $onDestroy() {
        this.restaurantObs.off();
    }
}

export const RestaurantDetailsComponent = {
    controller: Controller,
    template: require('./restaurant-details.component.html')
}