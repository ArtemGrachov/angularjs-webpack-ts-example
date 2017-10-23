import { Dish } from '../models/dish.model';
import { DataService, IDataService } from './data.service';
import { IPromise } from 'angular';

export interface IDishesService {
    test(): void
}

export class DishesService implements IDishesService {
    public static readonly serviceName: string = 'DishesService';
    public static readonly $inject: string[] = ['DataService'];
    constructor(private dataService: IDataService) { }

    test(): void {
        this.dataService.test();
    }
}