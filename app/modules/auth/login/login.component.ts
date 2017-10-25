import { IComponentOptions } from 'angular';
import { AuthService } from '../../../services/auth.service';

class Controller {
    constructor(private authService: AuthService) { }
    static readonly $inject: string[] = [AuthService.serviceName];
    public loginForm: any;

    login() {
        this.authService.login(this.loginForm);
    }
}

export const LoginComponent: IComponentOptions = {
    controller: Controller,
    template: require('./login.component.html')
}