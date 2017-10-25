import { IComponentOptions } from 'angular';
import { AuthService } from '../../../services/auth.service';

class Controller {
    constructor(private authService: AuthService) { }
    static readonly $inject: string[] = [AuthService.serviceName];
    public regForm: any;

    reg() {
        this.regForm.location = {
            lat: 0,
            lng: 0
        }
        this.authService.reg(this.regForm);
    }
}

export const RegComponent: IComponentOptions = {
    controller: Controller,
    template: require('./reg.component.html')
}