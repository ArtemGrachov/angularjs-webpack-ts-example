import { IRootScopeService } from 'angular';
import { DataService } from './data.service';
import { CartService } from './cart.service';
import { Order } from '../models/order.model';

export class OrdersService {
    constructor(private dataSerivce: DataService, private cartService: CartService, private $rootScope: IRootScopeService) { }
    static readonly $inject: string[] = [DataService.serviceName, CartService.serviceName, '$rootScope'];
    public static readonly serviceName: string = 'OrdersService';

    sendOrder(order: Order): Promise<any> {
        order.date = new Date().getTime();
        return this.dataSerivce
            .post('orders', order, false)
            .then((res: any) => {
                this.cartService.clearCart();
                this.$rootScope.$apply();
                return res;
            });
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