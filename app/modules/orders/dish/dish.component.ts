import { IComponentOptions, IScope } from 'angular';
import { Dish } from '../../../models/dish.model';
import { DishesService } from '../../../services/dishes.service';
import { StateParams } from '@uirouter/angularjs';

import './dish.component.scss';

class controller {
    constructor(private dishesService: DishesService, private $stateParams: StateParams, private $scope: IScope) { }

    public static readonly $inject: string[] = [DishesService.serviceName, '$stateParams', '$scope'];
    public dish: Dish;
    public dishObs: any;

    public $onInit() {
        this.dishObs = this
            .dishesService
            .getDish(this.$stateParams.id)
        this.dishObs
            .on('value', (res: any) => {
                this.dish = res.val();
                this.$scope.$apply();
            })

    }
    public $onDestroy() {
        this.dishObs.off();
    }
}

export const DishComponent: IComponentOptions = {
    controller: controller,
    template: require('./dish.component.html')
}