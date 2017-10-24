import { IComponentOptions } from 'angular';

class controller {
    $onInit() {

    }
}

export const RestaurantsComponent: IComponentOptions = {
    controller: controller,
    template: require('./restaurants.component.html')
}