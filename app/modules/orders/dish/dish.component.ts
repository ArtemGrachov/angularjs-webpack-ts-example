import { IComponentOptions, IScope } from 'angular';
import { Dish } from '../../../models/dish.model';
import { DishesService } from '../../../services/dishes.service';
import { CartService } from '../../../services/cart.service';
import { StateParams } from '@uirouter/angularjs';

import './dish.component.scss';

class controller {
    constructor(private dishesService: DishesService, private cartService: CartService, private $stateParams: StateParams, private $scope: IScope) { }

    public static readonly $inject: string[] = [DishesService.serviceName, CartService.serviceName, '$stateParams', '$scope'];
    public dish: Dish;
    public dishObs: any;
    public countInCart: number = 0;

    public $onInit() {
        this.dishObs = this
            .dishesService
            .getDish(this.$stateParams.id)
        this.dishObs
            .on('value', (res: any) => {
                this.dish = res.val();
                this.$scope.$apply();
            })
        this.countInCart = this.cartService.countInCart(this.$stateParams.id);
    }
    public $onDestroy() {
        this.dishObs.off();
    }
}

export const DishComponent: IComponentOptions = {
    controller: controller,
    template: require('./dish.component.html')
}