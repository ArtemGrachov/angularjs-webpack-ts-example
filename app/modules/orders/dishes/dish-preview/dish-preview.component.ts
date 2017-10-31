import { IComponentOptions, IScope } from 'angular';
import { DishesService } from '../../../../services/dishes.service';
import { Dish } from '../../../../models/dish.model';

const bindings = {
    dish: '=',
    id: '=',
    addToCart: '&',
    removeFromCart: '&',
    inCart: '='
}

class Controller {
    constructor(private $scope: IScope, private dishesService: DishesService) { }
    public static readonly $inject: string[] = ['$scope', DishesService.serviceName];
    public dish: Dish;
    public id: string;
    public inCart: number;
    public catObs: any;
    public category: string;
    $onInit() {
        console.log('init')
        if (this.dish.category) {
            this.catObs = this.dishesService.getCategory(this.dish.category);
            this.catObs.on('value', (res: any) => {
                this.category = res.val();
                this.$scope.$apply();
            })
        }
    }
    $onDestroy() {
        if (this.catObs) {
            this.catObs.off();
        }
    }
}

export const DishPreviewComponent: IComponentOptions = {
    controller: Controller,
    template: require('./dish-preview.component.html'),
    bindings: bindings
}