import { IComponentOptions, IScope } from 'angular';
import { DishesService } from '../../../../services/dishes.service';
import { Dish } from '../../../../models/dish.model';

class Controller {
    constructor(private $scope: IScope, private dishesService: DishesService) { }
    public static readonly $inject: string[] = ['$scope', DishesService.serviceName];
    public list: Dish[];
    public listObs: any;

    $onInit() {
        this.listObs = this.dishesService.getDishes();
        this.listObs.on('value', (res: any) => {
            this.list = res.val();
            this.$scope.$apply();
        })
    }
    $onDestroy() {
        this.listObs.off();
    }
}

export const AdminDishesComponent: IComponentOptions = {
    controller: Controller,
    template: require('./list.component.html')
}