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
        console.log('dishes service this', this)
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

/*
DISH GENERATOR
        for (let i = 0; i < 25; i++) {
            const dish = new Dish(
                'Dish #' + i,
                +(Math.random() * 10).toFixed(2),
                'https://media2.s-nbcnews.com/j/newscms/2017_10/1200234/10-healthy-fast-food-meals-008-subway-inline-today-170309_89a32509f1b93e969a831a913cc2a2d1.today-inline-large.jpg',
                'Labore qui duis proident sint et sunt id quis eiusmod laborum ad dolore do. Fugiat dolor aliqua aliquip ipsum aliqua cupidatat deserunt excepteur laborum. Enim qui cupidatat reprehenderit aliquip culpa minim commodo excepteur magna nostrud in minim quis. Labore pariatur aliqua cillum veniam sunt.',
                ['apple', 'bread', 'meat', 'salt', 'water', 'stone', 'wood', 'iron'],
                ''
            )
            this.addDish(dish);
        }

*/

/*
CATEGORIES GENERATOR
        for (let i = 0; i < 4; i++) {
            this.addCategory('Category #' + i)
        }
*/