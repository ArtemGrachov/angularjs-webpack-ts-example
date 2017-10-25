import { Restaurant } from '../models/restaurant.model';
import { DataService } from './data.service';
import { IPromise } from 'angular';

export class RestaurantsService {
    constructor(private dataService: DataService) { }
    static readonly $inject: string[] = [DataService.name];
    static readonly serviceName: string = 'RestaurantsService';

    addRestaurant(restaurant: Restaurant): Promise<any> {
        return this.dataService.post('/restaurants/', restaurant);
    }

    updateRestaurant(data: any): Promise<any> {
        return this.dataService.update('/restaurants/', data);
    }

    deleteRestaurant(id: string): Promise<any> {
        return this.dataService.remove('/restaurants/' + id);
    }

    getRestaurant(id: string): any {
        return this.dataService.get('/restaurants/' + id);
    }

    getRestaurants(): any {
        return this.dataService.get('/restaurants/')
    }

}