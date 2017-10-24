import { IComponentOptions } from 'angular';
import { CartService } from '../../../services/cart.service';
import './header.component.scss';

class controller {
    constructor(private cartService: CartService) { }
    static readonly $inject = [CartService.serviceName];
}

export const HeaderComponent: IComponentOptions = {
    controller: controller,
    template: <string>require('./header.component.html')
}