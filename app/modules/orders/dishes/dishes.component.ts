import { IComponentOptions, IScope } from 'angular';
import { Dish } from '../../../models/dish.model';

import { DishesService } from '../../../services/dishes.service';

class controller {
    constructor(
        private dishesService: DishesService,
        private $scope: IScope
    ) { }

    public static readonly $inject: string[] = [DishesService.serviceName, '$scope'];
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
}

export const DishesComponent: IComponentOptions = {
    controller: controller,
    template: require('./dishes.component.html')
}