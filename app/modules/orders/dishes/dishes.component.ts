import { IComponentOptions, IScope } from 'angular';
import { Dish } from '../../../models/dish.model';

import { DishesService } from '../../../services/dishes.service';
import { CartService } from '../../../services/cart.service';

import './dishes.component.scss';

class Controller {
    constructor(
        private dishesService: DishesService,
        private cartService: CartService,
        private $scope: IScope
    ) { }

    public static readonly $inject: string[] = [DishesService.serviceName, CartService.serviceName, '$scope'];
    public dishes: Dish[] = [];
    private dishesObs: any;

    public $onInit() {
        this.dishesObs = this.dishesService.getDishes();
        this.dishesObs.on('value', (res: any) => {
            this.dishes = res.val();
            this.$scope.$apply();
        })
    }

    public $onDestroy() {
        this.dishesObs.off();
    }

    public addToCart(id: string) {
        this.cartService.addToCart(id);
    }

    public removeFromCart(id: string) {
        this.cartService.removeFromCart(id);
    }
}

export const DishesComponent: IComponentOptions = {
    controller: Controller,
    template: require('./dishes.component.html')
}