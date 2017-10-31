import { IComponentOptions, IScope } from 'angular';
import { IState } from 'angular-ui-router';
import { DishesService } from '../../../../services/dishes.service';
import { EditService } from '../../edit.service';
import { Dish } from '../../../../models/dish.model';

class Controller {
    constructor(private $scope: IScope, private $state: IState, private editService: EditService, private dishesService: DishesService) { }
    public static readonly $inject: string[] = ['$scope', '$state', EditService.serviceName, DishesService.serviceName];
    public dish: Dish;
    public edit: boolean = false;
    public dishObs: any;
    public detailsForm: any;

    $onInit() {
        this.dishObs = this.dishesService.getDish(this.$state.params.id);
        this.dishObs
            .on('value', (res: any) => {
                this.dish = res.val();
                if (this.dish.category) {
                    this.dishesService.getCategory(this.dish.category)
                        .once('value')
                        .then((res: any) => {
                            this.dish.categoryName = res.val();
                            this.$scope.$apply();
                        })
                } else {
                    this.$scope.$apply();
                }
            })
    }
    $onDestroy() {
        this.dishObs.off();
    }
    toggleEdit() {
        this.edit = !this.edit;
    }
    submit() {
        this.dishesService
            .updateDish(
            this.$state.params.id,
            this.editService.getUpdated(this.detailsForm)
            )
    }
}

export const AdminDishComponent: IComponentOptions = {
    controller: Controller,
    template: require('./details.component.html')
}