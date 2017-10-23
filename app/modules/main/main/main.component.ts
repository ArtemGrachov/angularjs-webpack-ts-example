import { IDishesService, DishesService } from '../../../services/dishes.service';

class controller {
    public static readonly $inject: string[] = [DishesService.serviceName];
    constructor(
        private dishesService: IDishesService
    ) { }
    public $onInit() {
        const dishes = this.dishesService.getDishes(1);
        dishes.on('value', function (res: any) {
            console.log(res.val())
        })
        const time = new Date();
        this.dishesService.addDish({
            name: `Dish #${time.getMinutes()}:${time.getSeconds()}`,
            price: 5000,
            imageUrl: '',
            description: 'ddd zzz fff',
            ingredients: ['111', '222', '333'],
            date: new Date().getTime()
        })
    }
}

export const MainComponent = {
    controller: controller,
    template: <string>require('./main.component.html')
}