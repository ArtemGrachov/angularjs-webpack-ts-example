import { IComponentOptions } from 'angular';
import { CartService } from '../../../services/cart.service';
import './header.component.scss';

class Controller {
    constructor(private cartService: CartService) { }
    static readonly $inject = [CartService.serviceName];
}

export const HeaderComponent: IComponentOptions = {
    controller: Controller,
    template: <string>require('./header.component.html')
}