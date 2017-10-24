import { IComponentOptions } from 'angular';
import { OrdersService } from '../../../services/orders.service';

class controller {
    constructor(private ordersService: OrdersService) { }
    static readonly $inject: string[] = [OrdersService.name];

}

export const OrderComponent = {

}