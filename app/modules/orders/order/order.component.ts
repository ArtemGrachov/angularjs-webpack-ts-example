import { IComponentOptions } from 'angular';
import { OrdersService } from '../../../services/orders.service';
import { CartService } from '../../../services/cart.service';

import { Order } from '../../../models/order.model';

class Controller {
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

    removeCartItem(id: string) {
        this.cartService.removeFromCart(id);
    }
}

export const OrderComponent: IComponentOptions = {
    controller: Controller,
    template: require('./order.component.html')
}