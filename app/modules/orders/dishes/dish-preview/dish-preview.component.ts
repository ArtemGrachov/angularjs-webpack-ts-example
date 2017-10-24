import { IComponentOptions } from 'angular';
import { Dish } from '../../../../models/dish.model';
import './dish-preview.component.scss';

interface IBindings {
    [key: string]: any;
    dish: any;
    id: string
}

const bindings: IBindings = {
    dish: '=',
    id: '='
}

class controller implements IBindings {
    public dish: Dish;
    public id: string;
}

export const DishPreviewComponent: IComponentOptions = {
    controller: controller,
    template: require('./dish-preview.component.html'),
    bindings: bindings
}