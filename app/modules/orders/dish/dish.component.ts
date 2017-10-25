import { IComponentOptions, IScope } from 'angular';
import { Dish } from '../../../models/dish.model';
import { DishesService } from '../../../services/dishes.service';
import { CartService } from '../../../services/cart.service';
import { StateParams } from '@uirouter/angularjs';

import './dish.component.scss';

class Controller {
    constructor(private dishesService: DishesService, private cartService: CartService, private $stateParams: StateParams, private $scope: IScope) { }

    public static readonly $inject: string[] = [DishesService.serviceName, CartService.serviceName, '$stateParams', '$scope'];
    public dish: Dish;
    public dishObs: any;
    public id: string = this.$stateParams.id;

    public $onInit() {
        this.dishObs = this
            .dishesService
            .getDish(this.id)
        this.dishObs
            .on('value', (res: any) => {
                this.dish = res.val();
                this.$scope.$apply();
            })
    }
    public $onDestroy() {
        this.dishObs.off();
    }
    public addToCart() {
        this.cartService.addToCart(this.id);
    }
    public removeFromCart() {
        this.cartService.removeFromCart(this.id);
    }
}

export const DishComponent: IComponentOptions = {
    controller: Controller,
    template: require('./dish.component.html')
}