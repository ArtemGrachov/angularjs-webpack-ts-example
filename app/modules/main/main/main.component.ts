import { IDishesService, DishesService } from '../../../services/dishes.service';

class controller {
    public static readonly $inject: string[] = [DishesService.serviceName];
    constructor(
        private dishesService: IDishesService
    ) { }
    public $onInit() {
        this.dishesService.test();
    }
}

export const MainComponent = {
    controller: controller,
    template: <string>require('./main.component.html')
}