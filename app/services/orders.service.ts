import { DataService } from './data.service';
import { Order } from '../models/order.model';

export class OrdersService {
    constructor(private dataSerivce: DataService) { }
    static readonly $inject: string[] = [DataService.name];
    public static readonly serviceName: string = 'OrdersService';

    sendOrder(order: Order): Promise<any> {
        return this.dataSerivce
            .post('orders', order, false)
    }

    updateOrder(id: string, data: any): Promise<any> {
        return this.dataSerivce
            .update('orders/' + id, data, true)
    }

    getOrders(): any {
        return this.dataSerivce
            .get('orders', true)
    }

    getOrder(id: string): any {
        return this.dataSerivce
            .get('orders/' + id, true)
    }

    removeOrder(id: string): Promise<any> {
        return this.dataSerivce
            .remove('orders/' + id, true)
    }
}