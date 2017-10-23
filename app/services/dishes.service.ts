import { Dish } from '../models/dish.model';
import { DataService, IDataService } from './data.service';
import { IPromise } from 'angular';

export interface IDishesService {
    getDish(id: string): Promise<any>;
    test(): any
    // getDishes(): angular.IPromise<Dish[]>;
    // addDish(dish: Dish): angular.IPromise<any>; // ???
    // updateDish(dish: Dish): angular.IPromise<any>; // ???
    // deleteDish(id: string): angular.IPromise<any>; // ???
}

export class DishesService implements IDishesService {
    public static readonly serviceName: string = 'DishesService';
    public static readonly $inject: string[] = ['DataService'];
    constructor(private dataService: IDataService) { }

    getDish(id: string): Promise<Dish> {
        return new Promise<Dish>(
            function (resolve: any, reject: any) {
                resolve(fakeDishes[0]);
            }
        )
    }
    test(): IPromise<any> {
        return this.dataService.get('http://localhost:3000/test/324235235', false)
    }
}

const fakeDishes: Dish[] = [
    new Dish('0', 'test dish', 5000, 'http://lorempixel.com/output/food-q-c-640-480-4.jpg', 'Et aliquip eiusmod est eiusmod enim reprehenderit anim amet excepteur officia elit. Duis eu quis ullamco non aliqua sunt tempor velit id amet veniam. Labore voluptate eiusmod consequat sunt duis. Dolor irure fugiat pariatur adipisicing Lorem esse culpa exercitation amet enim consectetur irure. Est occaecat minim mollit do Lorem mollit mollit commodo adipisicing quis cupidatat. Sint qui ad sint qui proident eiusmod ad reprehenderit.', ['potatoes', 'water', 'salt']),
    new Dish('1', 'test dish #2', 3000, 'http://lorempixel.com/output/food-q-c-640-480-4.jpg', 'Ipsum enim cupidatat pariatur enim nisi non occaecat laboris incididunt consequat occaecat nisi occaecat. Magna cillum in aliquip excepteur ipsum id tempor ex sunt nulla id elit eiusmod. Reprehenderit officia dolore cupidatat dolor tempor ea esse mollit dolore proident eu consequat laborum ad. Excepteur enim cillum labore aute nisi deserunt tempor amet quis laborum duis eiusmod occaecat. Cillum exercitation eiusmod excepteur deserunt cupidatat esse aute ullamco laboris est dolor culpa.', ['apples'])
];