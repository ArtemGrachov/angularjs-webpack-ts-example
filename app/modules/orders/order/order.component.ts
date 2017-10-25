import { IComponentOptions } from 'angular';
import { OrdersService } from '../../../services/orders.service';
import { CartService } from '../../../services/cart.service';

import { Order } from '../../../models/order.model';

class controller {
    constructor(
        private ordersService: OrdersService,
        private cartService: CartService) { }

    static readonly $inject: string[] = [OrdersService.serviceName, CartService.serviceName];
    public orderForm: Order;

    sendOrder() {
        this.orderForm.location = {
            lat: 0,
            lng: 0
        }
        this.ordersService.sendOrder(this.orderForm);
    }
}

export const OrderComponent: IComponentOptions = {
    controller: controller,
    template: require('./order.component.html')
}