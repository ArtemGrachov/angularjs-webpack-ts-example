import { IComponentOptions } from 'angular';

const bindings = {
    inCart: '='
}

class Controller {
    public inCart: number
}

export const DishCartCounterComponent: IComponentOptions = {
    controller: Controller,
    template: require('./dish-cart-counter.component.html'),
    bindings: bindings
}