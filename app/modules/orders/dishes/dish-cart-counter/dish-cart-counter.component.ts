import { IComponentOptions } from 'angular';

const bindings = {
    inCart: '='
}

class controller {
    public inCart: number
}

export const DishCartCounterComponent: IComponentOptions = {
    controller: controller,
    template: require('./dish-cart-counter.component.html'),
    bindings: bindings
}