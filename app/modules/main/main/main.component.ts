import { IDishesService, DishesService } from '../../../services/dishes.service';

class controller {
    public static readonly $inject: string[] = [DishesService.serviceName];
    constructor(
        private dishesService: IDishesService
    ) { }

    public $onInit(): void {
        this.dishesService.getDish('0')
            .then(res =>
                console.log(res)
            )
        this.dishesService.test().then(
            (res: any) => console.log(res)
        );
    }
}

export const MainComponent = {
    controller: controller,
    template: <string>require('./main.component.html')
}