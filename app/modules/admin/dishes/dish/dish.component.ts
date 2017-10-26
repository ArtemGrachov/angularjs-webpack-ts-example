import { IComponentOptions } from 'angular';
import { StateParams } from '@uirouter/angularjs';
import { DishesService } from '../../../../services/dishes.service';
import { Dish } from '../../../../models/dish.model';

class Controller {
    constructor(private dishesService: DishesService, private $stateParams: StateParams) { }
    public static readonly $inject: string[] = [DishesService.serviceName, '$stateParams'];
    public editParams: any;
    $onInit() {
        console.log(this.$stateParams)
        const _this = this;
        if (this.$stateParams.id) {
            this.editParams = {
                serviceGet: _this.dishesService.getDish,
                serviceSend: _this.dishesService.updateDish
            }
        } else {
            this.editParams = {
                data: new Dish(),
                serviceSend: _this.dishesService.addDish
            }
        }
    }
}

export const AdminDishComponent: IComponentOptions = {
    controller: Controller,
    template: require('./dish.component.html')
}