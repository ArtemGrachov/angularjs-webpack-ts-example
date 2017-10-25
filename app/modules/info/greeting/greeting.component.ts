import { IComponentOptions } from 'angular';
import { DishesService } from '../../../services/dishes.service';
import { Dish } from '../../../models/dish.model';

class Controller {
    constructor(private dishesService: DishesService) { }
    static readonly $inject: string[] = [DishesService.serviceName];
    public dishesObs: any;
    public dishes: Dish[];

    $onInit() {
        this.dishesObs = this.dishesService
            .getDishes()
            .orderByChild('date')
            .limitToLast(5)
        this.dishesObs.on('value', (res: any) => {
            this.dishes = res.val();
        })
    }

}

export const GreetingComponent: IComponentOptions = {
    controller: Controller,
    template: require('./greeting.component.html')
}