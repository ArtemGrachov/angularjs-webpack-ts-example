import { Dish } from '../models/dish.model';
import { DataService, IDataService } from './data.service';
import { IPromise } from 'angular';

export interface IDishesService {
    addDish(dish: Dish): Promise<any>
    updateDish(dish: Dish): Promise<any>
    deleteDish(id: string): Promise<any>
    getDish(id: string): any
    getDishes(page: number): any
}

export class DishesService implements IDishesService {
    public static readonly serviceName: string = 'DishesService';
    public static readonly $inject: string[] = ['DataService'];
    constructor(private dataService: IDataService) {
    }

    addDish(dish: Dish): Promise<any> {
        return this.dataService.post('dishes', dish, true);
    }

    updateDish(dish: Dish): Promise<any> {
        return this.dataService.update('dishes', dish, true);
    }

    deleteDish(id: string): Promise<any> {
        return this.dataService.remove('dishes' + id, true);
    }

    getDish(id: string): any {
        return this.dataService.get('dishes' + id, false);
    }

    getDishes(page: number): any {
        return this.dataService.get('/dishes/', false)

    }
}