import { Restaurant } from '../models/restaurant.model';
import { DataService, IDataService } from './data.service';
import { IPromise } from 'angular';

export class RestaurantsService {
    constructor(private dataService: IDataService) { }
    static readonly $inject: string[] = [DataService.name];
    static readonly serviceName: string = 'RestaurantsService';

    addRestaurant(restaurant: Restaurant): Promise<any> {
        return this.dataService.post('/restaurants/', restaurant, true);
    }

    updateRestaurant(data: any): Promise<any> {
        return this.dataService.update('/restaurants/', data, true);
    }

    deleteRestaurant(id: string): Promise<any> {
        return this.dataService.remove('/restaurants/' + id, true);
    }

    getRestaurant(id: string): any {
        return this.dataService.get('/restaurants/' + id, false);
    }

    getRestaurants(): any {
        return this.dataService.get('/restaurants/', false)
    }

}