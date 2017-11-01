import { IComponentOptions, IScope } from 'angular';
import { IState } from 'angular-ui-router';
import { DishesService } from '../../../../services/dishes.service';
import { EditService } from '../../edit.service';
import { Dish } from '../../../../models/dish.model';

import { DetailsController } from '../../details-controller.class';

class Controller extends DetailsController {
    constructor($scope: IScope, $state: IState, dishesService: DishesService) {
        super($scope, $state, dishesService)
        this.dishesService = dishesService;
    }
    public static readonly $inject: string[] = ['$scope', '$state', DishesService.serviceName];
    private catObs: any;
    private categories: any;
    private dishesService: DishesService;

    catLoaderInit() {
        this.catObs = this.dishesService.getCategories();
        this.catObs
            .on('value', (res: any) => {
                this.categories = res.val();
                this.data.categoryName = this.categories[this.data.category];
                this.$scope.$apply();
            })
    }

    catLoaderUnsub() {
        this.catObs.off();
    }

    $onInit() {
        this.loaderInit();
        this.catLoaderInit();
    }

    $onDestroy() {
        this.loaderUnsub();
        this.catLoaderUnsub();
    }
}

export const AdminDishComponent: IComponentOptions = {
    controller: Controller,
    template: require('./details.component.html')
}