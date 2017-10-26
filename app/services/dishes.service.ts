import { Dish } from '../models/dish.model';
import { DataService } from './data.service';
import { CartService } from './cart.service';

export class DishesService {
    public static readonly $inject: string[] = [DataService.serviceName, CartService.serviceName];
    public static readonly serviceName: string = 'DishesService';
    constructor(private dataService: DataService, private cartService: CartService) {
    }

    addDish(dish: Dish): Promise<any> {
        return this.dataService.post('/dishes/', dish);
    }

    updateDish(data: any): Promise<any> {
        return this.dataService.update('/dishes/', data);
    }

    deleteDish(id: string): Promise<any> {
        return this.dataService.remove('/dishes/' + id);
    }

    getDish(id: string): any {
        return this.dataService.get('/dishes/' + id);
    }

    getDishes(): any {
        return this.dataService.get('/dishes/')
    }
}