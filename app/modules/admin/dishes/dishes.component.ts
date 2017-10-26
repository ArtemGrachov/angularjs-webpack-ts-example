import { IComponentOptions, IScope } from 'angular';
import { DishesService } from '../../../services/dishes.service';
import { Dish } from '../../../models/dish.model';

class Controller {
    public static readonly $inject: string[] = [DishesService.serviceName, '$scope'];
    constructor(private dishesService: DishesService, private $scope: IScope) { }
    public dishesObs: any;
    public dishes: Dish[] = [];

    $onInit() {
        this.dishesObs = this.dishesService.getDishes();
        this.dishesObs
            .on('value', (res: any) => {
                this.dishes = res.val();
                this.$scope.$apply();
            })
    }
    $onDestroy() {
        this.dishesObs.off();
    }
}

export const AdminDishesComponent: IComponentOptions = {
    controller: Controller,
    template: require('./dishes.component.html')
}