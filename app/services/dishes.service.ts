import { Dish } from '../models/dish.model';
import { DataService } from './data.service';
import { CartService } from './cart.service';

export class DishesService {
    public static readonly $inject: string[] = [DataService.serviceName, CartService.serviceName];
    public static readonly serviceName: string = 'DishesService';
    constructor(private dataService: DataService, private cartService: CartService) {

    }

    addDish(dish: Dish): Promise<any> {
        dish.date = new Date().getTime();
        return this.dataService.post('/dishes/list/', dish);
    }

    updateDish(dishId: string, data: any): Promise<any> {
        return this.dataService.update('/dishes/list/' + dishId, data);
    }

    deleteDish(id: string): Promise<any> {
        return this.dataService.remove('/dishes/list/' + id);
    }

    getDish(id: string): any {
        return this.dataService.get('/dishes/list/' + id);
    }

    getDishes(): any {
        return this.dataService.get('/dishes/list/');
    }

    getCategory(catId: string): any {
        return this.dataService.get('/dishes/categories/' + catId);
    }

    getCategories(): any {
        return this.dataService.get('/dishes/categories/');
    }

    addCategory(category: string): any {
        return this.dataService.post('/dishes/categories/', category);
    }

    updateCategory(catId: string, category: string): any {
        return this.dataService.update('/dishes/categories/' + catId, category);
    }
}