import './cart-item.component.scss';

import { IComponentOptions, IScope } from 'angular';
import { DishesService } from '../../../../services/dishes.service';

const bindings = {
    dishId: '='
}

class CartItem {
    constructor(
        public name: string,
        public price: number
    ) { }
}

class Controller {
    constructor(private dishesService: DishesService, private $scope: IScope) { }
    static readonly $inject: string[] = [DishesService.serviceName, '$scope'];
    public dishId: any;
    public dish: CartItem;
    private dishObs: any;

    $onInit() {
        this.dishObs = this.dishesService.getDish(this.dishId);
        this.dishObs.on('value', (res: any) => {
            const val = res.val();
            this.dish = new CartItem(val.name, val.price);
            this.$scope.$apply();
        })
    }
    $onDestroy() {
        this.dishObs.off();
    }
}

export const CartItemComponent: IComponentOptions = {
    controller: Controller,
    template: require('./cart-item.component.html'),
    bindings: bindings
}