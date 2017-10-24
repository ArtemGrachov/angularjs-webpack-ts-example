import { IComponentOptions, IScope } from 'angular';
import { Restaurant } from '../../../models/restaurant.model';
import { RestaurantsService } from '../../../services/restaurants.service';

class controller {
    constructor(private restaurantsService: RestaurantsService, private $scope: IScope) { }
    static readonly $inject: string[] = [RestaurantsService.name, '$scope'];
    private restaurantsObs: any;
    public restaurants: Restaurant[] = [];
    $onInit() {
        this.restaurantsObs = this.restaurantsService.getRestaurants();
        this.restaurantsObs.on('value', (res: any) => {
            this.restaurants = res.val();
            this.$scope.$apply();
        })
    }
    $onDestroy() {
        this.restaurantsObs.off();
    }
}

export const RestaurantsComponent: IComponentOptions = {
    controller: controller,
    template: require('./restaurants.component.html')
}