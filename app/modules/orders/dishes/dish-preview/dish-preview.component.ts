import { IComponentOptions } from 'angular';
import { Dish } from '../../../../models/dish.model';
import './dish-preview.component.scss';

const bindings = {
    dish: '=',
    id: '=',
    addToCart: '&',
    removeFromCart: '&',
    inCart: '='
}

class Controller {
    public dish: Dish;
    public id: string;
    public inCart: number;
}

export const DishPreviewComponent: IComponentOptions = {
    controller: Controller,
    template: require('./dish-preview.component.html'),
    bindings: bindings
}