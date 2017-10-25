import { IComponentOptions } from 'angular';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/auth.service';
import './header.component.scss';

class Controller {
    constructor(private cartService: CartService, private authService: AuthService) {
    }
    static readonly $inject = [CartService.serviceName, AuthService.serviceName];
}

export const HeaderComponent: IComponentOptions = {
    controller: Controller,
    template: <string>require('./header.component.html')
}