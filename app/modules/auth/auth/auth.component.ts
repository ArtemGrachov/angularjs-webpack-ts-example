import { IComponentOptions } from 'angular';
// test
import { AuthService } from '../../../services/auth.service';
// test

class Controller {
    //test
    constructor(private authService: AuthService) { }
    static readonly $inject: string[] = [AuthService.serviceName];
    //test
}

export const AuthComponent: IComponentOptions = {
    controller: Controller,
    template: require('./auth.component.html')
}