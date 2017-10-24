import { Dish } from '../models/dish.model';
import { DataService, IDataService } from './data.service';
import { IPromise } from 'angular';

export interface IDishesService {
    addDish(dish: Dish): Promise<any>
    updateDish(dish: Dish): Promise<any>
    deleteDish(id: string): Promise<any>
    getDish(id: string): any
    getDishes(): any
}

export class DishesService implements IDishesService {
    public static readonly serviceName: string = 'DishesService';
    public static readonly $inject: string[] = ['DataService'];
    constructor(private dataService: IDataService) {
        // for (let i = 0; i < 15; i++) {
        //     this.addDish({
        //         name: `Dish #${Math.ceil(Math.random() * 100)}`,
        //         price: 5000,
        //         imageUrl: 'https://media2.s-nbcnews.com/j/newscms/2017_10/1200234/10-healthy-fast-food-meals-008-subway-inline-today-170309_89a32509f1b93e969a831a913cc2a2d1.today-inline-large.jpg',
        //         description: 'ddd zzz fff',
        //         ingredients: ['111', '222', '333'],
        //         date: new Date().getTime()
        //     })
        // }
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
        return this.dataService.get('dishes/' + id, false);
    }

    getDishes(): any {
        return this.dataService.get('/dishes/', false)
    }
}